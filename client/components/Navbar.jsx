import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

{/* Form */}
import { 
    FormControl, FormLabel, 
    Input, InputGroup, InputRightElement, Checkbox,
    NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper
} from '@chakra-ui/react';

{/* Calendar */}
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { pt } from 'date-fns/locale';
import { SearchIcon, UsersIcon } from '@heroicons/react/solid';

{/* Dropdown */}
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { MenuIcon } from '@heroicons/react/solid';

{/* Modal */}
import {
    useDisclosure,
    Button,
    Modal, ModalOverlay, ModalHeader, ModalBody, ModalContent, ModalFooter, ModalCloseButton
} from '@chakra-ui/react';

function Navbar() {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const resetInput = () => {
        setSearchInput("");
        setNoOfGuests(1);
    };

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                checkin: startDate.toISOString(),
                checkout: endDate.toISOString(),
                noOfGuests,
            },
        });
    };

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = useState("md");
    const [show, setShow] = useState(false);

    const handleSizeClick = (newSize) => {
        setSize(newSize);
        onOpen();
    };

    const handleClick = (() => {
        setShow(!show);
    });

    return (
        <nav className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div onClick={() => router.push("/")} className="relative flex items-center h-8 cursor-pointer my-auto">
                <Image src="/favicon.ico" layout="fill" objectFit="contain" objectPosition="left" className="h-full w-full" />
            </div>

            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input value={searchInput} onChange={(event) => setSearchInput(event.target.value)} type="text" placeholder="Para onde você vai?"
                       className="flex-grow pl-5 bg-transparent outline-none rounded-md text-sm text-gray-4 placeholder-gray-6" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-purple-2 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>

            <div className="flex items-right space-x-4 m-2 justify-end text-black">
                <Menu>
                    <MenuButton as={IconButton} aria-label="Options" icon={<MenuIcon />} variant="ghost" />
                    <MenuList>
                        <MenuItem>Cadastrar</MenuItem>
                        <MenuItem onClick={() => handleSizeClick(size)} key={size}>Entrar</MenuItem>
                    </MenuList>
                </Menu>

                <Modal isOpen={isOpen} onClose={onClose} size={size}>
                    <ModalOverlay />
                        <ModalContent>
                            <ModalHeader className="text-center">Entrada</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <FormControl>
                                    <FormLabel className="mb-4 mt-4">Email</FormLabel>
                                    <Input placeholder="Digite o seu email" />
                                    <FormLabel className="mb-4 mt-4">Senha</FormLabel>
                                        <InputGroup size="md">
                                            <Input pr="4.5rem"
                                                type={show ? "text" : "password"}
                                                placeholder="Digite a sua senha"
                                                isRequired
                                                isInvalid={false}
                                            />
                                            <InputRightElement className="mr-2" width="4rem">
                                                <Button h="1.5rem" size="sm" onClick={handleClick}>{show ? "Ocultar" : "Mostrar"}</Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        <Checkbox className="mt-3" size="md" colorScheme={"purple"}>Mantenha-me conectado</Checkbox>
                                </FormControl>
                            </ModalBody>
                            <ModalFooter>
                                <Button className="mr-1" colorScheme={"purple"} onClick={onClose}>Entrar</Button>
                                <Button className="ml-1" onClick={onClose}>Fechar</Button>
                            </ModalFooter>
                        </ModalContent>
                </Modal>
            </div>

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRange ranges={[selectionRange]}
                               minDate= {new Date()}
                               rangeColors={['#6530d9']}
                               onChange={handleSelect}
                               locale={pt} />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold text-black">Número de hóspedes</h2>
                        <UsersIcon className="ml-3 h-5"/>
                        <NumberInput className="m-1 w-20 pl-2 text-md font-semibold text-black" defaultValue={1} min={1} max={99}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </div>
                    <div className="flex">
                        <button onClick={resetInput} className="flex-grow font-semibold text-black">Cancelar</button>
                        <button onClick={search} className="flex-grow font-semibold text-purple-3">Buscar</button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
