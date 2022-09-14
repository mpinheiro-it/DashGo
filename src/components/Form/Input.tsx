import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps, FormErrorMessage } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

//DECLARADO COMO CONST POR FAZER ENCAMINHAMENTO DE REF
//usada no ChakraInput abaixo
//ForwardRefRenderFunction > usado para tipagem do ref
const InputBase : ForwardRefRenderFunction<HTMLInputElement, InputProps> 
                = ({name, label, error = null, ...rest}, ref) => {
    return (
        <FormControl isInvalid={!!error}>

            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }


            <ChakraInput 
              name={name}
              id={name}
              type="email" 
              focusBorderColor="pink.500" 
              bgColor="gray.900" 
              variant="filled" 
              _hover={{bgColor: "gray.900"}} 
              size="lg"
              ref={ref}
              {...rest}
            />

        {!!error && (
            <FormErrorMessage>
                {error.message}
            </FormErrorMessage>
        )}
        </FormControl>
    );
} 

export const Input = forwardRef(InputBase)