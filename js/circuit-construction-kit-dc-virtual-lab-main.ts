// Copyright 2022-2025, University of Colorado Boulder

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
import soundManager from '../../tambo/js/soundManager.js';
import Tandem from '../../tandem/js/Tandem.js';
import CircuitConstructionKitDcVirtualLabStrings from './CircuitConstructionKitDcVirtualLabStrings.js';

// constants
const tandem = Tandem.ROOT;

const circuitConstructionKitDcVirtualLabTitleStringProperty = CircuitConstructionKitDcVirtualLabStrings[ 'circuit-construction-kit-dc-virtual-lab' ].titleStringProperty;

simLauncher.launch( () => {

  // Launch the simulation once everything is ready
  const sim = new Sim( circuitConstructionKitDcVirtualLabTitleStringProperty, [
    new LabScreen( tandem.createTandem( 'labScreen' ), {
      showNoncontactAmmeters: false,
      showAdvancedControls: false,

      // Uncomment to show charts on DC Virtual Lab
      showCharts: true
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
      softwareDevelopment: 'Sam Reid, Denzell Barnett, Matthew Blackman',
      team: 'Michael Dubson, Ariel Paul, Kathy Perkins, Wendy Adams, Carl Wieman',
      qualityAssurance: 'Jaspe Arias, Steele Dalton, Amanda Davis, Alex Dornan, Jaron Droder, Bryce Griebenow, Clifford Hardin, Ethan Johnson, Megan Lai, Brooklyn Lash, Emily Miller, Matthew Moore, Liam Mulhall, Devon Quispe, Ben Roberts, Jacob Romero, Nancy Salpepi, Ethan Ward, Kathryn Woessner',
      graphicArts: 'Bryce Gruneich, Mariah Hermsmeyer, Cheryl McCutchan'
    },
    phetioDesigned: true
  } );
  sim.start();

  // Disable sounds for joist/home screen/navigation bar/carousel, but leave sound for the dog bark
  soundManager.setOutputLevelForCategory( 'user-interface', 0 );
} );