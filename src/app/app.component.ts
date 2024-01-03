import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { BANUBA_CLIENT_TOKEN } from "./BanubaClientToken"

// import { BANUBA_CLIENT_TOKEN } from "./BanubaClientToken"
import { Webcam, Player, Module, Effect, Dom } from "@banuba/webar"

import wasm from "@banuba/webar/BanubaSDK.wasm?url"
import simd from "@banuba/webar/BanubaSDK.simd.wasm?url"
import data from "@banuba/webar/BanubaSDK.data?url"

// Find more about available modules:
// https://docs.banuba.com/face-ar-sdk-v1/generated/typedoc/classes/Module.html
import FaceTracker from "@banuba/webar/face_tracker.zip?url"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'quickstart';

  private webcam: Webcam
  private player: Promise<Player>

  constructor() {
    this.webcam = new Webcam();
    this.player = Player.create({
      clientToken: BANUBA_CLIENT_TOKEN,
      /**
       * By default BanubaSDK.js tries to loads BanubaSDK.wasm and BanubaSDK.data files relative to itself.
       * Since the BanubaSDK.js will be bundled to something like `static/js/[name].[hash].js` during a build
       * and the BanubaSDK.wasm and BanubaSDK.data files may not lay next to the bundle file
       * we have to tell the BanubaSDK where it can find these BanubaSDK.wasm and BanubaSDK.data files.
       * @see {@link https://docs.banuba.com/generated/typedoc/globals.html#sdkoptions} further information}
       */
      locateFile: {
        "BanubaSDK.wasm": wasm,
        "BanubaSDK.simd.wasm": simd,
        "BanubaSDK.data": data,
      },
    })
  }

  ngOnInit() {
    this.player.then((player) => 
      player.addModule(new Module(FaceTracker)).then(() => {
        player.use(this.webcam)
        player.applyEffect(new Effect("assets/effects/glasses_Banuba.zip"))
        Dom.render(player, "#webar")
      })
    )
  }

  ngOnDestroy() {
    this.webcam.stop()
    Dom.unmount("#webar")
  }
}
