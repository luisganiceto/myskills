import React from "react";
import { 
    StyleSheet,
    TouchableOpacity, 
    Text, 
    TouchableOpacityProps
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps{
    skill : string;
}

export function SkillCard({ skill, ...rest } : SkillCardProps){
    return(
        <TouchableOpacity
            style={ styles.buttonSkill }
            { ...rest }
        >
            <Text style={ styles.skill }>
                { skill }
            </Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 20
    },
    skill: {
        color: '#FFF',    
        fontSize: 22,
        fontWeight: 'bold'
    }
});