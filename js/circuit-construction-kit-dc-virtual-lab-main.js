// Copyright 2017-2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCConstants from '../../circuit-construction-kit-common/js/CCKCConstants.js';
import CCKCOptionsDialogContent from '../../circuit-construction-kit-common/js/view/CCKCOptionsDialogContent.js';
import LabScreen from '../../circuit-construction-kit-dc/js/lab/LabScreen.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import '../../scenery/js/nodes/Image.js';
import soundManager from '../../tambo/js/soundManager.js'; // Image is required for making toDataURLNodeSynchronous work in the built version
import Tandem from '../../tandem/js/Tandem.js';
import circuitConstructionKitDcVirtualLabStrings from './circuitConstructionKitDcVirtualLabStrings.js';

// constants
const tandem = Tandem.ROOT;

const circuitConstructionKitDcVirtualLabTitleString = circuitConstructionKitDcVirtualLabStrings[ 'circuit-construction-kit-dc-virtual-lab' ].title;
CCKCConstants.CAROUSEL_SCALE = CCKCConstants.DC_CAROUSEL_SCALE;

const simOptions = {
  createOptionsDialogContent: tandem => new CCKCOptionsDialogContent( tandem ),
  credits: {
    leadDesign: 'Amy Rouinfar',
    softwareDevelopment: 'Sam Reid, Denzell Barnett',
    team: 'Michael Dubson, Ariel Paul, Kathy Perkins, Wendy Adams, Carl Wieman',
    qualityAssurance: 'Jaspe Arias, Steele Dalton, Amanda Davis, Alex Dornan, Bryce Griebenow, Ethan Johnson, Megan Lai, Brooklyn Lash, Matthew Moore, Liam Mulhall, Devon Quispe, Ben Roberts, Jacob Romero, Ethan Ward, Kathryn Woessner',
    graphicArts: 'Bryce Gruneich, Mariah Hermsmeyer, Cheryl McCutchan'
  },
  tandem: tandem
};

// Circuit Construction Kit has unit tests for checking the mathematics for the Modified Nodal Analysis algorithm.  In
// order to load the classes into an accessible namespace, the *-config.js and *-main.js are loaded however, when
// running the unit tests we don't also want to launch the simulation.
if ( !window.circuitConstructionKitTestSuite ) {
  simLauncher.launch( () => {

    // Launch the simulation once everything is ready
    const sim = new Sim( circuitConstructionKitDcVirtualLabTitleString, [
      new LabScreen( tandem.createTandem( 'labScreen' ), {
        showNoncontactAmmeters: false
      } )
    ], simOptions );
    sim.start();

    // Disable sounds for joist/home screen/navigation bar/carousel, but leave sound for the dog bark
    soundManager.setOutputLevelForCategory( 'user-interface', 0 );
  } );
}