import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

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

function Navbar() {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const resetInput = () => {
        setSearchInput('');
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

    return (
        <nav className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div onClick={() => router.push("/")} className="relative flex items-center h-8 cursor-pointer my-auto">
                <Image src="/favicon.ico" 
                       layout="fill" 
                       objectFit="contain"
                       objectPosition="left"
                       className="h-full w-full" 
                />
            </div>

            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input value={searchInput} onChange={(event) => setSearchInput(event.target.value)} type="text" placeholder="Para onde você vai?"
                       className="flex-grow pl-5 bg-transparent outline-none rounded-md text-sm text-gray-8 placeholder-gray-6" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-purple-2 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>

            <div className="flex items-right space-x-4 m-2 justify-end text-black">
                <Menu>
                    <MenuButton as={IconButton}
                                aria-label="Options"
                                icon={<MenuIcon />}
                                variant="ghost"
                    />
                    <MenuList>
                        <MenuItem onClick={() => router.push("/")}>Cadastrar</MenuItem>
                        <MenuItem onClick={() => router.push("/")}>Entrar</MenuItem>
                    </MenuList>
                </Menu>
            </div>

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRange ranges={[selectionRange]}
                                     minDate= {new Date()}
                                     rangeColors={['#6530d9']}
                                     onChange={handleSelect}
                                     locale={pt}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold text-black">Número de hóspedes</h2>
                        <UsersIcon className="h-5"/>
                        <input value={noOfGuests} onChange={(event) => setNoOfGuests(event.target.value)} type="number" 
                               min={1} max={50} className="w-12 pl-2 text-lg outline-none font-semibold text-black"/>
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
