// Copyright 2022, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCSimulationPreferencesContentNode from '../../circuit-construction-kit-common/js/view/CCKCSimulationPreferencesContentNode.js';
import LabScreen from '../../circuit-construction-kit-dc/js/lab/LabScreen.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import '../../scenery/js/nodes/Image.js';
import soundManager from '../../tambo/js/soundManager.js'; // Image is required for making toDataURLNodeSynchronous work in the built version
import Tandem from '../../tandem/js/Tandem.js';
import CircuitConstructionKitDcVirtualLabStrings from './CircuitConstructionKitDcVirtualLabStrings.js';

// constants
const tandem = Tandem.ROOT;

const circuitConstructionKitDcVirtualLabTitleStringProperty = CircuitConstructionKitDcVirtualLabStrings[ 'circuit-construction-kit-dc-virtual-lab' ].titleStringProperty;

simLauncher.launch( () => {

  // Launch the simulation once everything is ready
  const sim = new Sim( circuitConstructionKitDcVirtualLabTitleStringProperty, [
    new LabScreen( tandem.createTandem( 'labScreen' ), {
      showNoncontactAmmeters: false
    } )
  ], {
    preferencesModel: new PreferencesModel( {
      simulationOptions: {
        customPreferences: [ {
          createContent: tandem => new CCKCSimulationPreferencesContentNode( tandem.createTandem( 'simPreferences' ) )
        } ]
      }
    } ),
    credits: {
      leadDesign: 'Amy Rouinfar',
      softwareDevelopment: 'Sam Reid, Denzell Barnett',
      team: 'Michael Dubson, Ariel Paul, Kathy Perkins, Wendy Adams, Carl Wieman',
      qualityAssurance: 'Jaspe Arias, Steele Dalton, Amanda Davis, Alex Dornan, Bryce Griebenow, Ethan Johnson, Megan Lai, Brooklyn Lash, Matthew Moore, Liam Mulhall, Devon Quispe, Ben Roberts, Jacob Romero, Ethan Ward, Kathryn Woessner',
      graphicArts: 'Bryce Gruneich, Mariah Hermsmeyer, Cheryl McCutchan'
    }
  } );
  sim.start();

  // Disable sounds for joist/home screen/navigation bar/carousel, but leave sound for the dog bark
  soundManager.setOutputLevelForCategory( 'user-interface', 0 );
} );