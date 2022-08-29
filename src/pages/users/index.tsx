import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Form/Header";
import { Sidebar } from "../../components/Form/Sidebar";

export default function UserList() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="pink"
                          leftIcon={<Icon as={RiAddLine} />}
                          >

                            Criar Novo
                        </Button>
                    </Flex>

                   <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                            </Tr>
                            <Th>Usuário</Th>
                            <Th>Data de Cadastro</Th>                            
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td>
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Murilo Pinheiro</Text>
                                        <Text fontSize="sm" color="gray.300">pinheiromurilo13@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>15 de Maio, 2022</Td>

                                <Td>
                                    <Button 
                                      as="a"
                                      colorScheme="pink"
                                      fontSize="sm"                                       
                                      leftIcon={<Icon as={RiAddLine} />}>
                                        
                                      Editar
                                    </Button>
                                </Td>
                                
                            </Tr>
                           


                        </Tbody>
                   </Table>

                </Box>

            
            </Flex>


        </Box>
    )
}