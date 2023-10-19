'use client'
import { useState } from 'react'
import { Title, Badge, Code, Select, Fieldset, Card, Switch, SimpleGrid, Container } from '@mantine/core';


const ConnectedInput: React.FC<ConnectedInputProps> = ({ data }) => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder >
            <Code variant="outline" color="gray" radius="xs">{data.id}</Code>
            <Badge variant="outline" color="gray" radius="xs">{data.manufacturer}</Badge>
            <Badge variant="outline" color="gray" radius="xs">{data.name}</Badge>
            <Badge variant="outline" color="gray" radius="xs">{data.connection}</Badge>
            <Badge variant="outline" color="gray" radius="xs">{data.eventCount}</Badge>
            <Switch
                defaultChecked
                color="gray"
                label="eventsSuspended"
                size="md"
                radius="xs"
                checked={data.eventsSuspended}
            />
        </Card>

    );
};

type ConnectedInputProps = {
    data: MIDIPort
};


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

export default ConnectedInput;