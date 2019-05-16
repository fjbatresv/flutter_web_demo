define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, animation, material, animation$, ui) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__binding = animation.src__widgets__binding;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__material__app = material.src__material__app;
  const src__material__theme_data = material.src__material__theme_data;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__card = material.src__material__card;
  const src__material__theme = material.src__material__theme;
  const src__painting__alignment = animation$.src__painting__alignment;
  const ui$ = ui.ui;
  const main = Object.create(dart.library);
  const src__app = Object.create(dart.library);
  const src__ui__home = Object.create(dart.library);
  let BuildContextToHome = () => (BuildContextToHome = dart.constFn(dart.fnType(src__ui__home.Home, [src__widgets__framework.BuildContext])))();
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])))();
  let IdentityMapOfString$BuildContextToWidget = () => (IdentityMapOfString$BuildContextToWidget = dart.constFn(_js_helper.IdentityMap$(core.String, BuildContextToWidget())))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let const$;
  let const$0;
  main.main = function() {
    return src__widgets__binding.runApp(new src__app.App.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 4, column: 23, file: "org-dartlang-app:///packages/demo_web/main.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}));
  };
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  src__app.App = class App extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__app.MaterialApp.new({theme: src__material__theme_data.ThemeData.dark(), initialRoute: "/", routes: new (IdentityMapOfString$BuildContextToWidget()).from(["/", dart.fn(context => new src__ui__home.Home.new({$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 27, file: "org-dartlang-app:///packages/demo_web/src/app.dart", parameterLocations: const$1 || (const$1 = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToHome())]), $creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 7, column: 12, file: "org-dartlang-app:///packages/demo_web/src/app.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 8, column: 7, name: "theme"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 7, name: "initialRoute"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 7, name: "routes"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (src__app.App.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    src__app.App.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__app.App.prototype;
  dart.addTypeTests(src__app.App);
  dart.setMethodSignature(src__app.App, () => ({
    __proto__: dart.getMethods(src__app.App.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  src__ui__home.Home = class Home extends src__widgets__framework.StatefulWidget {
    createState() {
      return new src__ui__home._Home.new();
    }
  };
  (src__ui__home.Home.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    src__ui__home.Home.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__ui__home.Home.prototype;
  dart.addTypeTests(src__ui__home.Home);
  dart.setMethodSignature(src__ui__home.Home, () => ({
    __proto__: dart.getMethods(src__ui__home.Home.__proto__),
    createState: dart.fnType(src__ui__home._Home, [])
  }));
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  let const$75;
  let const$76;
  let const$77;
  let const$78;
  let const$79;
  let const$80;
  src__ui__home._Home = class _Home extends src__widgets__framework.State$(src__ui__home.Home) {
    build(context) {
      return new src__material__scaffold.Scaffold.new({appBar: new src__material__app_bar.AppBar.new({title: new src__widgets__text.Text.new("Home", {$creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 16, file: "org-dartlang-app:///packages/demo_web/src/ui/home.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 21, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 15, file: "org-dartlang-app:///packages/demo_web/src/ui/home.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 9, name: "title"})))], src__widgets__widget_inspector._Location))})))}), body: new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.all(20.0), child: new src__widgets__scroll_view.GridView.count({primary: false, crossAxisSpacing: 10.0, crossAxisCount: 4, children: JSArrayOfWidget().of([new src__material__card.Card.new({color: src__material__theme.Theme.of(context).cardColor, child: new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.all(20.0), alignment: src__painting__alignment.Alignment.center, child: new src__widgets__text.Text.new("Material Design", {style: src__material__theme.Theme.of(context).textTheme.display2, $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 26, file: "org-dartlang-app:///packages/demo_web/src/ui/home.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 31, name: "data"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 23, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 24, file: "org-dartlang-app:///packages/demo_web/src/ui/home.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 19, name: "padding"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 19, name: "alignment"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 15, file: "org-dartlang-app:///packages/demo_web/src/ui/home.dart", parameterLocations: const$25 || (const$25 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 17, name: "color"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__card.Card.new({color: src__material__theme.Theme.of(context).cardColor, child: new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.all(20.0), alignment: src__painting__alignment.Alignment.center, child: new src__widgets__text.Text.new("Cupertino IOS", {style: src__material__theme.Theme.of(context).textTheme.display2, $creationLocationd_0dea112b090073317d4: const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 26, file: "org-dartlang-app:///packages/demo_web/src/ui/home.dart", parameterLocations: const$29 || (const$29 = dart.constList([const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 31, name: "data"}))), const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 23, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 24, file: "org-dartlang-app:///packages/demo_web/src/ui/home.dart", parameterLocations: const$34 || (const$34 = dart.constList([const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 19, name: "padding"}))), const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 19, name: "alignment"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 15, file: "org-dartlang-app:///packages/demo_web/src/ui/home.dart", parameterLocations: const$38 || (const$38 = dart.constList([const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 17, name: "color"}))), const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__card.Card.new({color: src__material__theme.Theme.of(context).cardColor, child: new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.all(20.0), alignment: src__painting__alignment.Alignment.center, child: new src__widgets__text.Text.new("Flutter Flare", {style: src__material__theme.Theme.of(context).textTheme.display2, $creationLocationd_0dea112b090073317d4: const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 26, file: "org-dartlang-app:///packages/demo_web/src/ui/home.dart", parameterLocations: const$42 || (const$42 = dart.constList([const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 31, name: "data"}))), const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 23, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 24, file: "org-dartlang-app:///packages/demo_web/src/ui/home.dart", parameterLocations: const$47 || (const$47 = dart.constList([const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 19, name: "padding"}))), const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 19, name: "alignment"}))), const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 15, file: "org-dartlang-app:///packages/demo_web/src/ui/home.dart", parameterLocations: const$51 || (const$51 = dart.constList([const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 17, name: "color"}))), const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__card.Card.new({color: src__material__theme.Theme.of(context).cardColor, child: new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.all(20.0), alignment: src__painting__alignment.Alignment.center, child: new src__widgets__text.Text.new("Animations SDK ", {textAlign: ui$.TextAlign.center, style: src__material__theme.Theme.of(context).textTheme.display2, $creationLocationd_0dea112b090073317d4: const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 26, file: "org-dartlang-app:///packages/demo_web/src/ui/home.dart", parameterLocations: const$56 || (const$56 = dart.constList([const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 31, name: "data"}))), const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 19, name: "textAlign"}))), const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 23, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 24, file: "org-dartlang-app:///packages/demo_web/src/ui/home.dart", parameterLocations: const$61 || (const$61 = dart.constList([const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 19, name: "padding"}))), const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 19, name: "alignment"}))), const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 15, file: "org-dartlang-app:///packages/demo_web/src/ui/home.dart", parameterLocations: const$65 || (const$65 = dart.constList([const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 17, name: "color"}))), const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 27, file: "org-dartlang-app:///packages/demo_web/src/ui/home.dart", parameterLocations: const$71 || (const$71 = dart.constList([const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 13, name: "primary"}))), const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 13, name: "crossAxisSpacing"}))), const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 13, name: "crossAxisCount"}))), const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 13, file: "org-dartlang-app:///packages/demo_web/src/ui/home.dart", parameterLocations: const$75 || (const$75 = dart.constList([const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 11, name: "padding"}))), const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 12, file: "org-dartlang-app:///packages/demo_web/src/ui/home.dart", parameterLocations: const$79 || (const$79 = dart.constList([const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 7, name: "appBar"}))), const$78 || (const$78 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (src__ui__home._Home.new = function() {
    src__ui__home._Home.__proto__.new.call(this);
    ;
  }).prototype = src__ui__home._Home.prototype;
  dart.addTypeTests(src__ui__home._Home);
  dart.setMethodSignature(src__ui__home._Home, () => ({
    __proto__: dart.getMethods(src__ui__home._Home.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.trackLibraries("packages/demo_web/main", {
    "package:demo_web/main.dart": main,
    "package:demo_web/src/app.dart": src__app,
    "package:demo_web/src/ui/home.dart": src__ui__home
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/demo_web/main.dart","org-dartlang-app:///packages/demo_web/src/app.dart","org-dartlang-app:///packages/demo_web/src/ui/home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAGe,wCAAO;EAAM;;;;;;;;;UCEA;AACxB,YAAO,gDACY,0DACH,aACN,uDACN,KAAK,QAAC,WAAY;IAGxB;;;;;;EACF;;;;;;;;ACTI,YAAO;IACT;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,mDACG,8CACC,gCAAK,y4BAER,oDACkB,8CAAI,cACR,uDACL,yBACS,sBACF,aACE,sBAChB,yCACe,AAAY,8BAAT,OAAO,oBAChB,oDACe,8CAAI,kBACH,kDACd,gCAAK,2BACK,AAAY,AAAU,8BAAnB,OAAO,m1DAG/B,yCACe,AAAY,8BAAT,OAAO,oBAChB,oDACe,8CAAI,kBACH,kDACd,gCAAK,yBACK,AAAY,AAAU,8BAAnB,OAAO,m1DAG/B,yCACe,AAAY,8BAAT,OAAO,oBAChB,oDACe,8CAAI,kBACH,kDACd,gCAAK,yBACK,AAAY,AAAU,8BAAnB,OAAO,m1DAG/B,yCACe,AAAY,8BAAT,OAAO,oBAChB,oDACe,8CAAI,kBACH,kDACd,gCAAK,+BACS,6BACJ,AAAY,AAAU,8BAAnB,OAAO;IAM3C;;;;;EACF","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main,
    src__app: src__app,
    src__ui__home: src__ui__home
  };
});

//# sourceMappingURL=main.ddc.js.map
