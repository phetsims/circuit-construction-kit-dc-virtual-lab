// Copyright 2022-2025, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCConstants from '../../circuit-construction-kit-common/js/CCKCConstants.js';
import CCKCSim from '../../circuit-construction-kit-common/js/view/CCKCSim.js';
import CCKCSimulationPreferencesContentNode from '../../circuit-construction-kit-common/js/view/CCKCSimulationPreferencesContentNode.js';
import LabScreen from '../../circuit-construction-kit-dc/js/lab/LabScreen.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import CircuitConstructionKitDcVirtualLabStrings from './CircuitConstructionKitDcVirtualLabStrings.js';

// constants
const tandem = Tandem.ROOT;

const circuitConstructionKitDcVirtualLabTitleStringProperty = CircuitConstructionKitDcVirtualLabStrings[ 'circuit-construction-kit-dc-virtual-lab' ].titleStringProperty;

simLauncher.launch( () => {

  // Launch the simulation once everything is ready
  const sim = new CCKCSim( circuitConstructionKitDcVirtualLabTitleStringProperty, [
    new LabScreen( tandem.createTandem( 'labScreen' ), {
      showNoncontactAmmeters: false
    } )
  ], {
    preferencesModel: new PreferencesModel( {
      simulationOptions: {
        customPreferences: [ {
          createContent: tandem => new CCKCSimulationPreferencesContentNode( tandem )
        } ]
      }
    } ),
    credits: CCKCConstants.CREDITS,
    phetioDesigned: true
  } );
  sim.start();
} );