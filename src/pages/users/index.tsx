import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { api } from '../../services/api'
import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import { useQuery } from 'react-query'


import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {

const {data, isLoading, isFetching, error} = useQuery('users', async () => {
    const { data } = await api.get('users')    
    const users = data.users.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.created_at).toLocaleDateString('pt-br',{                
                year: 'numeric',
                month: 'long',
                day: 'numeric' 
            })
            };        
    });

    return users;
}, {
    staleTime: 1000 * 5 // 5 seconds
})


    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            
                            { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" /> }
                        </Heading>

                    <Link href="/users/create" passHref>
                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} />}
                            >

                            Criar Novo
                        </Button>
                    </Link>
                        
                    </Flex>

                    { isLoading ? (
                <Flex justify={'center'}>
                    <Spinner />
                </Flex>
            ) : error ? (
                <Flex justify={'center'}>
                    <Text>Falha ao carregar dados</Text>
                </Flex>
            ) : (
                <>               
                <Table colorScheme="whiteAlpha">
                    <Thead>
                        <Tr>
                            <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                <Checkbox colorScheme="pink" />
                            </Th>
                            <Th>Usuário</Th>
                            { isWideVersion && <Th>Data de Cadastro</Th> }
                        </Tr>
                                                    
                    </Thead>

                    <Tbody>
                        { data.map(user => {
                            return (
                                <Tr>
                                    <Td px={["4", "4", "6"]}>
                                        <Checkbox colorScheme="pink"/>
                                    </Td>
                                    <Td px={["4", "4", "6"]}>
                                        <Box>
                                            <Text fontWeight="bold">{user.name}</Text>
                                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                        </Box>
                                    </Td>
                                    { isWideVersion && <Td>{user.createdAt}</Td>}
                                </Tr>   
                            )                                
                        })}                 

                        {isWideVersion &&                         
                            <Td>                          
                                <Button 
                                as="a"
                                colorScheme="pink"
                                fontSize="sm"                                       
                                leftIcon={<Icon as={RiAddLine} />}>
                                    
                                Editar
                                </Button>
                            </Td>
                            }
                                    
                    </Tbody>
                </Table>

                <Pagination />
                </>
            )}
                  
                </Box>
            </Flex>
        </Box>
    )
}