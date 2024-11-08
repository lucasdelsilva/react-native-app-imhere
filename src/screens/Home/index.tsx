import React, { useState } from "react";

import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from "./styles";

import { Participant } from '../../components/Participant'

export function Home() {
    const [participants, setParticipants] = useState<IParticipants[]>([]);
    const [participantName, setPartcipantName] = useState('');

    function addParticipant() {
        let exists = participants.filter(x => x.name.toUpperCase() === participantName.toUpperCase());
        if (exists.length > 0) {
            return Alert.alert("Participante existe", "Já existe um participante com o mesmo nome.")
        } else if (participantName == "") {
            return Alert.alert("Erro", "Por favor, adicione um nome.")
        }

        const newParticipant: IParticipants = {
            id: participants.length + 1,
            name: participantName
        };

        setParticipants(previState => [...previState, newParticipant]);
        setPartcipantName('');
    }

    function removeParticipant(id: number, name: string) {
        Alert.alert("Remover", `Deseja remover o ${name}?`, [
            { text: "Sim", onPress: () => setParticipants(participants.filter(x => x.id !== id)) },
            { text: "Não", style: "cancel" }
        ])
    }

    return (
        <View style={styles.container}>

            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventeDate}>Sexta, 4 novembro de 2024.</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante" placeholderTextColor="#6B6B6B"
                    keyboardType="default"
                    onChangeText={text => setPartcipantName(text)}
                    value={participantName}
                />
                <TouchableOpacity style={styles.button} onPress={addParticipant}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList showsVerticalScrollIndicator={false}
                data={participants}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Participant
                        key={item.id}
                        name={item.name} onRemove={() => removeParticipant(item.id, item.name)} />
                )}

                ListEmptyComponent={() => (
                    <Text style={styles.listEmpty}>
                        Nenhum dado encontrado!
                    </Text>
                )}
            />

        </View>
    );
}