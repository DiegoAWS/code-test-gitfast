import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

export default function TypeSelector({ typeSearch, setTypeSearch }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} size='sm'>
            <DropdownToggle caret>  {typeSearch}      </DropdownToggle>
            <DropdownMenu>
                <DropdownItem
                    disabled={typeSearch === 'all'}
                    onClick={() => { setTypeSearch('all') }}>
                    All
                            </DropdownItem>
                <DropdownItem
                    disabled={typeSearch === 'owner'}
                    onClick={() => { setTypeSearch('owner') }}>
                    Owner
                            </DropdownItem>
                <DropdownItem
                    disabled={typeSearch === 'member'}
                    onClick={() => { setTypeSearch('member') }}>
                    Member
                            </DropdownItem>

            </DropdownMenu>
        </Dropdown>
    )
}
