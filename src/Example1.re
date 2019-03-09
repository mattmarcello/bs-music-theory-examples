/*
   reproduced from original
   https://github.com/cemolcay/MusicTheory/blob/master/Playground.playground/Contents.swift
 */

open BsMusicTheory;

let p = Pitch.makeWithString("cb2");

let b = Key.makeWithString("b");

p.key == b |> Js.log2("p.key ==b");

Pitch.make(
  ~key=Key.make(~type_=KeyType.D, ~accidental=Natural, ()),
  ~octave=0,
)
->Pitch.subtractInterval(Interval.augmented5);

Pitch.make(
  ~key=Key.make(~type_=KeyType.D, ~accidental=Natural, ()),
  ~octave=0,
)
->Pitch.subtractInterval(Interval.diminished5);

Pitch.make(
  ~key=Key.make(~type_=KeyType.D, ~accidental=Natural, ()),
  ~octave=0,
)
->Pitch.addInterval(Interval.augmented5);

Pitch.make(
  ~key=Key.make(~type_=KeyType.D, ~accidental=Natural, ()),
  ~octave=0,
)
->Pitch.addInterval(Interval.diminished5);

/* // c# d d# e f f# g g# a a# b c */

let cSharpHarmonicMinor =
  BsMusicTheory.Scale.make(
    ~type_=BsMusicTheory.ScaleType.harmonicMinor,
    ~key=BsMusicTheory.Key.make(~type_=C, ~accidental=Accidental.sharp, ()),
  );

// chord progression for C# harmonic minor triads
let progression = BsMusicTheory.ChordProgression.i_ii_vi_iv;

let cSharpHarmonicMinorTriadsProgression =
  progression->ChordProgression.chords(
    ~for_=cSharpHarmonicMinor,
    ~harmonicField=Triad,
    ~inversion=0,
    (),
  );

let cSharpHarmonicMinorTriadsProgressionString =
  cSharpHarmonicMinorTriadsProgression
  ->Belt.List.map(Chord.description)
  ->Belt.List.toArray
  |> Js.Array.joinWith(" - ");

let c13: Chord.t =
  Chord.make(
    ~type_=
      ChordType.(
        make(
          ~third=Major,
          ~fifth=Perfect,
          ~seventh=Dominant,
          ~extensions=[ChordExtensionType.make(~type_=Thirteenth, ())],
          (),
        )
      ),
    ~key=BsMusicTheory.Key.make(~type_=C, ~accidental=Natural, ()),
    (),
  );

let cdim7 =
  Chord.make(
    ~type_=
      ChordType.(
        make(
          ~third=Major,
          ~fifth=Diminished,
          ~seventh=Diminished,
          ~extensions=[ChordExtensionType.make(~type_=Thirteenth, ())],
          (),
        )
      ),
    ~key=Key.make(~type_=KeyType.C, ()),
    (),
  );

let cdim7Notation = cdim7->Chord.notation;

let component = ReasonReact.statelessComponent("Example1");

let make = _children => {
  ...component,
  render: _self =>
    <div>
      <pre>
        {ReasonReact.string(
           {|
        let progression = BsMusicTheory.ChordProgression.i_ii_vi_iv;

	let cSharpHarmonicMinorTriadsProgression =
	  progression->ChordProgression.chords(
	    ~for_=cSharpHarmonicMinor,
	    ~harmonicField=Triad,
	    ~inversion=0,
	    (),
	  );

       |},
         )}
        <strong>
          <em>
            {ReasonReact.string(
               "=> " ++ cSharpHarmonicMinorTriadsProgressionString,
             )}
          </em>
        </strong>
      </pre>
      <pre>
        {ReasonReact.string(
           {|


	let c13 =
	  Chord.make(
	    ~type_=
	      ChordType.(
		make(
		  ~third=Major,
		  ~fifth=Perfect,
		  ~seventh=Dominant,
		  ~extensions=[ChordExtensionType.make(~type_=Thirteenth, ())],
		  (),
		)
	      ),
	    ~key=BsMusicTheory.Key.make(~type_=C, ~accidental=Natural, ()),
	  );

       |},
         )}
        <strong>
          <em>
            {ReasonReact.string(
               "c13.type_.intervals => "
               ++ (
                 c13.type_
                 ->ChordType.intervals
                 ->Belt.List.map(Interval.description)
                 ->Belt.List.toArray
                 |> Js.Array.joinWith(" ")
               ),
             )}
            <div>
              {ReasonReact.string(
                 "       c13 -> Chord.pitches(~octave=1) => "
                 ++ (
                   c13
                   ->Chord.pitches(~octave=1, ())
                   ->Belt.List.map(Pitch.description)
                   ->Belt.List.toArray
                   |> Js.Array.joinWith(" ")
                 ),
               )}
            </div>
            <div>
              {ReasonReact.string(
                 "       c13 -> Chord.inversions -> Belt.List.getExn(1) -> Chord.pitches(~octave=1) => "
                 ++ (
                   c13
		   -> Chord.inversions
		   -> Belt.List.getExn(1)
                   ->Chord.pitches(~octave=1, ())
                   ->Belt.List.map(Pitch.description)
                   ->Belt.List.toArray
                   |> Js.Array.joinWith(" ")
                 ),
               )}
            </div>
          </em>
        </strong>
      </pre>
    </div>,
};
