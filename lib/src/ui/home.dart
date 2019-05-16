import 'package:flutter_web/material.dart';

class Home extends StatefulWidget {
  @override
  _Home createState() {
    return _Home();
  }
}

class _Home extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home'),
      ),
      body: Container(
          padding: EdgeInsets.all(20),
          child: GridView.count(
            primary: false,
            crossAxisSpacing: 10,
            crossAxisCount: 4,
            children: <Widget>[
              Card(
                color: Theme.of(context).cardColor,
                child: Container(
                  padding: EdgeInsets.all(20),
                  alignment: Alignment.center,
                  child: Text('Material Design',
                      style: Theme.of(context).textTheme.display2),
                ),
              ),
              Card(
                color: Theme.of(context).cardColor,
                child: Container(
                  padding: EdgeInsets.all(20),
                  alignment: Alignment.center,
                  child: Text('Cupertino IOS',
                      style: Theme.of(context).textTheme.display2),
                ),
              ),
              Card(
                color: Theme.of(context).cardColor,
                child: Container(
                  padding: EdgeInsets.all(20),
                  alignment: Alignment.center,
                  child: Text('Flutter Flare',
                      style: Theme.of(context).textTheme.display2),
                ),
              ),
              Card(
                color: Theme.of(context).cardColor,
                child: Container(
                  padding: EdgeInsets.all(20),
                  alignment: Alignment.center,
                  child: Text('Animations SDK ',
                  textAlign: TextAlign.center,
                      style: Theme.of(context).textTheme.display2),
                ),
              )
            ],
          )),
    );
  }
}
