import {deviceID} from "/card-tools/deviceId"
class BrowserMod {

  constructor() {
    window.hassConnection.then((conn) => this.connect(conn.conn));
  }

  connect(conn) {
    console.log("Connection opened. Connecting to browser_mod");
    this.connection = conn.subscribeMessage((msg) => this.callback(msg), {
      type: 'browser_mod/connect',
      deviceID: deviceID,
      });
    console.log("Connected");
    console.log(this.connection);
  }

  callback(msg) {
    console.log("Got ws message");
    console.log(msg);
  }

}

window.browser_mod = new BrowserMod();

