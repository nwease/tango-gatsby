import React from 'react'
import { Link } from 'gatsby'
import tangoMail from '../../images/tango-mail-icon.svg'
import tangoPage from '../../images/tango-page-icon.svg'
import { SidebarWrapper, SidebarMenu, EducationBadge } from './styles/PageSidebarStyles'
import PropTypes from 'prop-types'

const PageSidebar = ({children, parentChildren, currentPage, parent}) => {

    const getParentContent = () => {
        // No children, show default text
        return children.edges.length === 0 ? (
            <>
                <li className='sidebar-menu-header'>
                    <img src={tangoMail} alt='tango-mail'/>
                    <span>
                        Mail List
                    </span>
                </li>

                <p>
                    Do you want to be updated when we publish new trend posts?
                    <br />
                    Just mail us with your name, company name and mail address.
                </p>

                <a href='mailto:anders@tangobrandalliance.se'>
                    Anders Linden
                </a>
            </>
        ) : (
            // Page with children, show menu
            <>
                <li className='sidebar-menu-header'>
                    <img src={tangoPage} alt='tango-page'/>{' '}
                    <span dangerouslySetInnerHTML={{__html: currentPage.title}} />
                </li>

                {children.edges.map(child => (
                    <li key={child.node.id}>
                        <Link to={child.node.link}>
                            <span dangerouslySetInnerHTML={{__html: child.node.title}} />
                        </Link>
                    </li>
                ))}
            </>
        )
    }

    const getChildContent = () => (
        <>
            <li className='sidebar-menu-header'>
                <img src={tangoPage} alt='tango-page'/>{' '}

                <span dangerouslySetInnerHTML={{__html: parent.title}} />
            </li>

            {parentChildren.edges.map(child => (
                <li key={child.node.id} className={currentPage.id === child.node.id ? 'sidebar-highlighted' : ''}>
                    {currentPage.id === child.node.id ? (
                        <span dangerouslySetInnerHTML={{__html: child.node.title}} />
                    ) : (
                        <Link to={child.node.link}>
                            <span dangerouslySetInnerHTML={{__html: child.node.title}} />
                        </Link>
                    )}
                </li>
            ))}
        </>
    )



    return (
        <SidebarWrapper className='col-lg-3'>
            {currentPage.acf.education ? (
                <EducationBadge className='tango-call-to-action-education'>
                    <a href='mailto:anders@tangobrandalliance.se'>
                        Enroll the course
                    </a>
                </EducationBadge>
            ) : null}

            <SidebarMenu className='tango-sidebar-menu tango-page-sidebar-text'>
                {currentPage.wordpress_parent === 0 ? getParentContent() : getChildContent()}
            </SidebarMenu>
        </SidebarWrapper>
    )
}

PageSidebar.propTypes = {
    children: PropTypes.object,
    parentChildren: PropTypes.object,
    parent: PropTypes.object,
    currentPage: PropTypes.object
}

export default PageSidebar
