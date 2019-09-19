import React from 'react'
import { Link } from 'gatsby'
import tangoMail from '../../images/tango-mail-icon.svg'
import tangoPage from '../../images/tango-page-icon.svg'
import { SidebarWrapper, SidebarMenu } from '../post/styles/PostSidebarStyles'

const ArchiveSidebar = ({catId, categories}) => {

    const sortedCategories = [...categories].sort((x, y) => {
        if (x.node.slug === 'alla-trendspaningar') return -1
        if (y.node.slug === 'alla-trendspaningar') return 1

        return 0
    })

    return (
        <SidebarWrapper className='col-lg-3'>
            <SidebarMenu>
                <li className='sidebar-menu-header'>
                    <img src={tangoPage} alt='tango-page'/>

                    <span>
                        Trends
                    </span>
                </li>

                {sortedCategories.map(cat=> {
                    if (cat.node.count !== 0) {
                        return cat.node.slug !== 'okategoriserade' ? (
                            <li key={cat.node.id} className={cat.node.id === catId ? 'sidebar-highlighted' : null}>
                                <span className='count'>
                                    {cat.node.count}
                                </span>

                                {cat.node.id === catId ? (
                                    <span dangerouslySetInnerHTML={{__html: cat.node.name}} />
                                ) : (
                                    <Link to={`/trends/${cat.node.slug}/`}>
                                        <span dangerouslySetInnerHTML={{ __html: cat.node.name }}/>
                                    </Link>
                                )}
                            </li>
                        ) : null
                    }
                    return null
                })}

                <li className='sidebar-menu-header'>
                    <div style={{marginTop: '40px'}}>
                        <img src={tangoMail} alt='tango-page'/>

                        <span>
                            Mail List
                        </span>
                    </div>
                </li>

                <p>
                    Do you want to be updated when we publish new trend posts?
                    <br />
                    Just mail us with your name, company name and mail address.
                </p>

                <a href='mailto:anders@tangobrandalliance.se'>
                    Anders Linden
                </a>
            </SidebarMenu>
        </SidebarWrapper>
    )
}

export default ArchiveSidebar
