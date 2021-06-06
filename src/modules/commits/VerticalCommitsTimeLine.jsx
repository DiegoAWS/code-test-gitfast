import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import OneCommit from "./OneCommit"
import { format } from "date-fns"
import commitIcon from '../../assets/imgs/commitIcon.svg'
import { groupCommitsByDate } from '../../helpers/groupCommitsByDate'
import styled from 'styled-components'

const VerticalTimelineWrapper = styled.div`
        .vertical-timeline::before { // Vertical Line element in <VerticalTimeline/>
            width:1px;
            left:20px;        
        }
        .vertical-timeline{
            padding:0px;
            padding-top:1rem;
        }
    margin-top:1rem;
`

export default function VerticalCommitsTimeLine({ commitList }) {

    const groupedCommits = groupCommitsByDate(commitList)

    return (
        <VerticalTimelineWrapper>
            <VerticalTimeline layout='1-column-left' animate={false}>
                {groupedCommits.map(dateGroup => (
                    <VerticalTimelineElement
                        key={dateGroup.date}
                        contentStyle={{ padding: '0px', color: 'white', backgroundColor: 'transparent', boxShadow: 'none' }}
                        contentArrowStyle={{ display: 'none' }}
                        className='m-0'
                        iconStyle={{
                            backgroundColor: 'black',
                            boxShadow: 'none',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '20px'
                        }}
                        icon={<img alt='' src={commitIcon} width='20px' height='20px' />}
                    >

                        <div className='text-white'>{format(new Date(dateGroup.date), 'PPPP')}</div>

                        <div className='w-100 mt-2 border border-white rounded-3'>
                            {dateGroup.commits.map(item => (
                                <OneCommit key={item.sha} commit={item} />
                            ))}
                        </div>

                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </VerticalTimelineWrapper>
    )
}
