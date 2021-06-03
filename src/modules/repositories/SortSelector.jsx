import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

export default function SortSelector({ sortSearch, setSortSearch }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} size='sm'>
            <DropdownToggle caret>  {sortSearch}      </DropdownToggle>
            <DropdownMenu>
                <DropdownItem
                    disabled={sortSearch === 'created'}
                    onClick={() => { setSortSearch('created') }}>
                    Created
                            </DropdownItem>
                <DropdownItem
                    disabled={sortSearch === 'updated'}
                    onClick={() => { setSortSearch('updated') }}>
                    Updated
                            </DropdownItem>
                <DropdownItem
                    disabled={sortSearch === 'pushed'}
                    onClick={() => { setSortSearch('pushed') }}>
                    Pushed
                            </DropdownItem>
                <DropdownItem
                    disabled={sortSearch === 'full_name'}
                    onClick={() => { setSortSearch('full_name') }}>
                    Full name
                            </DropdownItem>


            </DropdownMenu>
        </Dropdown>
    )
}
