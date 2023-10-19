'use client'
import { useState } from 'react'
import { Title, Badge, Text, Select, Fieldset, Card, Switch, SimpleGrid, Container } from '@mantine/core';
import { WebMidi } from "webmidi"
import ConnectedInput from './input'

WebMidi
    .enable({ sysex: true })
    .then(() => console.log("WebMidi with sysex enabled!"))
    .catch(err => alert(err));


export default function Connected() {
    const [inputs, setInputs] = useState(WebMidi.inputs);
    const [outputs, setOutputs] = useState(WebMidi.outputs);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    return (
        <Container>
            <Title ta="center" mt={100}>
                INPUTS
            </Title>
            <SimpleGrid cols={4}>
                {inputs.map((data: any, index: any) => (
                    <ConnectedInput key={index} data={data} />
                ))}
            </SimpleGrid>
            <Title ta="center" mt={100}>
                OUTPUTS
            </Title>
            <SimpleGrid cols={4}>
                {outputs.map((data: any, index: any) => (
                    <ConnectedInput key={index} data={data} />
                ))}
            </SimpleGrid>
        </Container>
    );
}

type MIDIPort = {

    id: string;
    manufacturer?: string | undefined;
    eventCount?: number | 0;
    name?: string | undefined;
    type: MIDIPortType;
    version?: string | undefined;
    state: MIDIPortDeviceState;
    connection: MIDIPortConnectionState;
    eventsSuspended: boolean;
}
