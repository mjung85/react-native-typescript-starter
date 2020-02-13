import React, { FunctionComponent } from "react";
import Native, { TextProps } from "react-native";
import { Button as Btn } from '../../../Presentation/components/Button/Button';
import { ButtonProps } from "../../../Presentation/components/Button/ButtonProps";
import { useTheme } from "../../hooks";
import { LocalizedText as Localized } from '../LocalizedText/LocalizedText';
import { ThemedProps } from './ThemedProps';

export namespace Themed {

    export const Text : FunctionComponent<ThemedProps & TextProps> = props => {
        const { context = 'onSurface', style, children, ...rest } = props;
        const { theme } = useTheme();

        return (
            <Native.Text style={[style, { color : theme.colors[context] }]} {...rest}>
                {children}
            </Native.Text>
        );
    }

    export const LocalizedText : FunctionComponent<ThemedProps & TextProps> = props => {
        const { context = 'onSurface', style, children, ...rest } = props;
        const { theme } = useTheme();

        return (
            <Localized style={[style, { color : theme.colors[context] }]} {...rest}>
                {children}
            </Localized>
        );
    }

    export const Button : FunctionComponent<ThemedProps & ButtonProps> = props => {
        const { context = 'primary', style, children, ...rest } = props;
        const { theme } = useTheme();

        return (
            <Btn style={[style, { backgroundColor : theme.colors[context] }]} {...rest}>
                {children}
            </Btn>
        );
    }
}