// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Key$BsMusicTheory = require("bs-music-theory/src/Key.bs.js");
var Chord$BsMusicTheory = require("bs-music-theory/src/Chord.bs.js");
var Pitch$BsMusicTheory = require("bs-music-theory/src/Pitch.bs.js");
var Scale$BsMusicTheory = require("bs-music-theory/src/Scale.bs.js");
var Interval$BsMusicTheory = require("bs-music-theory/src/Interval.bs.js");
var ChordType$BsMusicTheory = require("bs-music-theory/src/ChordType.bs.js");
var ScaleType$BsMusicTheory = require("bs-music-theory/src/ScaleType.bs.js");
var Accidental$BsMusicTheory = require("bs-music-theory/src/Accidental.bs.js");
var ChordProgression$BsMusicTheory = require("bs-music-theory/src/ChordProgression.bs.js");

var p = Pitch$BsMusicTheory.makeWithString("cb2");

var b = Key$BsMusicTheory.makeWithString("b");

console.log("p.key ==b", Caml_obj.caml_equal(p[/* key */0], b));

Pitch$BsMusicTheory.subtractInterval(Pitch$BsMusicTheory.make(Key$BsMusicTheory.make(/* D */1, /* Natural */0, /* () */0), 0), Interval$BsMusicTheory.augmented5);

Pitch$BsMusicTheory.subtractInterval(Pitch$BsMusicTheory.make(Key$BsMusicTheory.make(/* D */1, /* Natural */0, /* () */0), 0), Interval$BsMusicTheory.diminished5);

Pitch$BsMusicTheory.addInterval(Pitch$BsMusicTheory.make(Key$BsMusicTheory.make(/* D */1, /* Natural */0, /* () */0), 0), Interval$BsMusicTheory.augmented5);

Pitch$BsMusicTheory.addInterval(Pitch$BsMusicTheory.make(Key$BsMusicTheory.make(/* D */1, /* Natural */0, /* () */0), 0), Interval$BsMusicTheory.diminished5);

var cSharpHarmonicMinor = Scale$BsMusicTheory.make(ScaleType$BsMusicTheory.harmonicMinor, Key$BsMusicTheory.make(/* C */0, Accidental$BsMusicTheory.sharp, /* () */0));

var cSharpHarmonicMinorTriadsProgression = ChordProgression$BsMusicTheory.chords(ChordProgression$BsMusicTheory.i_ii_vi_iv, cSharpHarmonicMinor, /* Triad */0, 0, /* () */0);

var cSharpHarmonicMinorTriadsProgressionString = Belt_List.toArray(Belt_List.map(cSharpHarmonicMinorTriadsProgression, Chord$BsMusicTheory.description)).join(" - ");

var c13 = Chord$BsMusicTheory.make(ChordType$BsMusicTheory.make(/* Major */0, /* Perfect */0, undefined, /* Dominant */1, undefined, /* :: */[
          ChordType$BsMusicTheory.ChordExtensionType[/* make */1](/* Thirteenth */2, undefined, /* () */0),
          /* [] */0
        ], /* () */0), Key$BsMusicTheory.make(/* C */0, /* Natural */0, /* () */0), undefined, /* () */0);

var cdim7 = Chord$BsMusicTheory.make(ChordType$BsMusicTheory.make(/* Major */0, /* Diminished */1, undefined, /* Diminished */2, undefined, /* :: */[
          ChordType$BsMusicTheory.ChordExtensionType[/* make */1](/* Thirteenth */2, undefined, /* () */0),
          /* [] */0
        ], /* () */0), Key$BsMusicTheory.make(/* C */0, undefined, /* () */0), undefined, /* () */0);

var cdim7Notation = Chord$BsMusicTheory.notation(cdim7);

var component = ReasonReact.statelessComponent("Example1");

function make(_children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              return React.createElement("div", undefined, React.createElement("pre", undefined, "\n        let progression = BsMusicTheory.ChordProgression.i_ii_vi_iv;\n\n\tlet cSharpHarmonicMinorTriadsProgression =\n\t  progression->ChordProgression.chords(\n\t    ~for_=cSharpHarmonicMinor,\n\t    ~harmonicField=Triad,\n\t    ~inversion=0,\n\t    (),\n\t  );\n\n       ", React.createElement("strong", undefined, React.createElement("em", undefined, "=> " + cSharpHarmonicMinorTriadsProgressionString))), React.createElement("pre", undefined, "\n\n\n\tlet c13 =\n\t  Chord.make(\n\t    ~type_=\n\t      ChordType.(\n\t\tmake(\n\t\t  ~third=Major,\n\t\t  ~fifth=Perfect,\n\t\t  ~seventh=Dominant,\n\t\t  ~extensions=[ChordExtensionType.make(~type_=Thirteenth, ())],\n\t\t  (),\n\t\t)\n\t      ),\n\t    ~key=BsMusicTheory.Key.make(~type_=C, ~accidental=Natural, ()),\n\t  );\n\n       ", React.createElement("strong", undefined, React.createElement("em", undefined, "c13.type_.intervals => " + Belt_List.toArray(Belt_List.map(ChordType$BsMusicTheory.intervals(c13[/* type_ */0]), Interval$BsMusicTheory.description)).join(" "), React.createElement("div", undefined, "       c13 -> Chord.pitches(~octave=1) => " + Belt_List.toArray(Belt_List.map(Chord$BsMusicTheory.pitches(c13, 1, /* () */0), Pitch$BsMusicTheory.description)).join(" ")), React.createElement("div", undefined, "       c13 -> Chord.inversions -> Belt.List.getExn(1) -> Chord.pitches(~octave=1) => " + Belt_List.toArray(Belt_List.map(Chord$BsMusicTheory.pitches(Belt_List.getExn(Chord$BsMusicTheory.inversions(c13), 1), 1, /* () */0), Pitch$BsMusicTheory.description)).join(" "))))));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var progression = ChordProgression$BsMusicTheory.i_ii_vi_iv;

exports.p = p;
exports.b = b;
exports.cSharpHarmonicMinor = cSharpHarmonicMinor;
exports.progression = progression;
exports.cSharpHarmonicMinorTriadsProgression = cSharpHarmonicMinorTriadsProgression;
exports.cSharpHarmonicMinorTriadsProgressionString = cSharpHarmonicMinorTriadsProgressionString;
exports.c13 = c13;
exports.cdim7 = cdim7;
exports.cdim7Notation = cdim7Notation;
exports.component = component;
exports.make = make;
/* p Not a pure module */
