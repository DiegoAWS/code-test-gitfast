import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

export default function SortSelector({ sortSearch, setSortSearch }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    const handlerSelector = (e) => {
        setSortSearch(e.target.name)
    }
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} size='sm'>
            <DropdownToggle caret>  {sortSearch}      </DropdownToggle>
            <DropdownMenu>
                <DropdownItem
                    name='created'
                    disabled={sortSearch === 'created'}

                    onClick={handlerSelector}>
                    Created
                            </DropdownItem>
                <DropdownItem
                    disabled={sortSearch === 'updated'}
                    name='updated'
                    onClick={handlerSelector}>
                    Updated
                            </DropdownItem>
                <DropdownItem
                    disabled={sortSearch === 'pushed'}
                    name='pushed'
                    onClick={handlerSelector}>
                    Pushed
                            </DropdownItem>
                <DropdownItem
                    disabled={sortSearch === 'full_name'}
                    name='full_name'
                    onClick={handlerSelector}>
                    Full name
                            </DropdownItem>


            </DropdownMenu>
        </Dropdown>
    )
}
