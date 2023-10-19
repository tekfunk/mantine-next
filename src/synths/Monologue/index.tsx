import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';
import { Button } from '@mantine/core';
import { Program } from './program';
const transformDataFrom7BitTo8Bit = require('./utilities').transformDataFrom7BitTo8Bit;
const Monolib = require('./monolib');

const easymidi = require('easymidi');
const input = new easymidi.Input('monologue KBD/KNOB');
input.on('sysex', function (msg) {
  const data = transformDataFrom7BitTo8Bit(msg.bytes);
  console.log(Monologue.createFromSysEx(data).toString());
});

export function Monologue() {

  const sysex = new Uint8Array([
    240,66,48,0,1,68,64,0,80,82,79,71,84,104,105,0,99,107,83,101,113,0,0,124,0,0,0,23,0,98,127,33,127,74,80,27,68,90,95,25,90,0,16,24,101,79,58,2,17,17,50,0,12,36,0,36,56,34,38,102,91,72,83,8,69,81,68,34,3,16,0,12,0,54,127,127,0,0,0,0,0,37,105,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,4,45,0,42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,48,0,59,0,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,96,0,1,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,8,0,96,0,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,48,0,58,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,61,2,0,45,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,0,4,40,0,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,247
  ])
  const input = new easymidi.Input('monologue KBD/KNOB');
  input.on('sysex', function (msg) {
    const data = transformDataFrom7BitTo8Bit(msg.bytes);
    console.log(Monolib.createFromSysEx(data).toString());
  });
  //const data = transformDataFrom7BitTo8Bit(sysex);
  //const program = Monolib.createFromSysEx(data).toString()
  //console.log(program);
  return (
    <>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        <Button variant="filled">TRY ME</Button>
        <Program data={data} />
      </Text>
    </>
  );
}
