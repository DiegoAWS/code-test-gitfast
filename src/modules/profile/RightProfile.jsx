import React from 'react'
import { Input, Label, FormGroup } from 'reactstrap'

export default function RightProfile({ profile }) {
    const companyProfile = profile?.company || ''
    const locationProfile = profile?.location || ''
    const bioProfile = profile?.bio || ''
    return (
        <div className='px-md-5 w-100 mt-5 mt-md-0'>
            <div className='border rounded p-2 p-md-5 '>
                <FormGroup >
                    <Label>Company</Label>
                    <Input type="text" value={companyProfile} readOnly placeholder="No company available" />
                </FormGroup>
                <FormGroup className='mt-3'>
                    <Label>Location</Label>
                    <Input type="text" value={locationProfile} readOnly placeholder="No location available" />
                </FormGroup>
                <FormGroup className='mt-3'>
                    <Label>Bio</Label>
                    <Input type="textarea"
                        value={bioProfile}
                        readOnly
                        placeholder="No bio available" rows='5'
                        style={{ resize: 'none' }} />
                </FormGroup>
            </div>
        </div>
    )
}
