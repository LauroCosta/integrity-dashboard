import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
    {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
    <ChakraInput
      size="lg"
      name={name}
      type={name}
      variant="filled"
      bgColor="gray.800"
      focusBorderColor="blue.500"
      _hover={{
        bg: "gray.800",
      }}
      {...rest}
    />
  </FormControl>
  )
}