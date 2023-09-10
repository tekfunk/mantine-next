import React, { useState } from 'react'
const { bin, getBits, addLowerBits } = require('./utilities');
const transformDataFrom7BitTo8Bit = require('./utilities').transformDataFrom7BitTo8Bit;

const sysex = new Uint8Array([
    240,66,48,0,1,68,64,0,80,82,79,71,84,104,105,0,99,107,83,101,113,0,0,124,0,0,0,23,0,98,127,33,127,74,80,27,68,90,95,25,90,0,16,24,101,79,58,2,17,17,50,0,12,36,0,36,56,34,38,102,91,72,83,8,69,81,68,34,3,16,0,12,0,54,127,127,0,0,0,0,0,37,105,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,4,45,0,42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,48,0,59,0,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,96,0,1,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,8,0,96,0,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,48,0,58,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,61,2,0,45,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,0,4,40,0,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,247
  ])
  const data = transformDataFrom7BitTo8Bit(sysex);


export function Program() {

  const SLIDER_ASSIGN_MATRIX = {
    13: 'VCO 1 PITCH',
    14: 'VCO 1 SHAPE',
    17: 'VCO 2 PITCH',
    18: 'VCO 2 SHAPE',
    21: 'VCO 1 LEVEL',
    22: 'VCO 1 LEVEL',
    23: 'CUTOFF',
    24: 'RESONANCE',
    26: 'ATTACK',
    27: 'DECAY',
    28: 'EG INT',
    31: 'LFO RATE',
    32: 'LFO INT',
    40: 'PORTAMENT',
    56: 'PITCH BEND',
    57: 'GATE TIME',
  };

  const patch = {
    NAME: data.slice(4, 16).map((x) => String.fromCharCode(x)).join(''),
    DRIVE: addLowerBits(data[29], data[35], 6),
    VCO1_WAVE: getBits(data[30], 6, 7),
    VCO1_SHAPE: addLowerBits(data[17], data[30], 2),
    VCO1_LEVEL: addLowerBits(data[20], data[33], 0),
    VCO1_PITCH: addLowerBits(data[16], data[30], 0),
    VCO1_OCTAVE: getBits(data[30], 4, 5),
    VCO2_WAVE: getBits(data[31], 6, 7),
    VCO2_SHAPE: addLowerBits(data[19], data[31], 2),
    VCO2_LEVEL: addLowerBits(data[21], data[33], 2),
    VCO2_PITCH: addLowerBits(data[18], data[31], 0),
    VCO2_OCTAVE: getBits(data[31], 4, 5),
    SYNC_RING: getBits(data[32], 0, 1),
    CUTOFF: addLowerBits(data[22], data[33], 4),
    RESONANCE: addLowerBits(data[23], data[33], 6),
    EG_TYPE: getBits(data[34], 0, 1),
    EG_ATTACK: addLowerBits(data[24], data[34], 2),
    EG_DECAY: addLowerBits(data[24], data[34], 2),
    EG_INTENSITY: addLowerBits(data[26], data[35], 0),
    EG_TARGET: getBits(data[34], 6, 7),
    LFO_WAVE: getBits(data[36], 0, 1),
    LFO_MODE: getBits(data[36], 2, 3),
    LFO_RATE: addLowerBits(data[27], data[35], 2),
    LFO_INTENSITY: addLowerBits(data[28], data[35], 4),
    LFO_TARGET: getBits(data[36], 4, 5),
    LFO_BPM_SYNC: getBits(data[44], 3, 3),
    PORTAMENT_MODE: getBits(data[44], 0, 0),
    POTAMENT_TIME: data[41],
    CUTOFF_VELOCITY: getBits(data[44], 4, 5),
    CUTOFF_KEY_TRACK: getBits(data[44], 6, 7),
    SLIDER_ASSIGN: SLIDER_ASSIGN_MATRIX[data[42]],
  };

  console.log(patch)

  return (
  <React.Fragment>
    <h2>PROGRAM</h2>
  </React.Fragment>
  )
   
}
