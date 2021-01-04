import PropTypes from 'prop-types'
import React from 'react'
import { Display, isDefined } from 'common'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiPhone, FiMail } from 'react-icons/fi'

/* ---------------------------------------------------------------- */

const GITHUB_REG = /^https:\/\/github\.com\/(.+)$/
const LINKEDIN_REG = /^https:\/\/www\.linkedin\.com\/in\/([a-z]+-[a-z]+)-.+$/

const Icon = ({ Comp }) => (
  <span style={{ fontSize: '10pt' }}>
    <Comp />
    &#8201;
  </span>
)
Icon.propTypes = {
  Comp: PropTypes.node.isRequired,
}

const A = ({ children, ...props }) => (
  <a
    style={{
      color: 'inherit',
    }}
    {...props}
  >
    {children}
  </a>
)
A.propTypes = {
  children: PropTypes.node.isRequired,
}

/* ---------------------------------------------------------------- */

const Name = ({ first, last }) => (
  <Display className='name' predicate={isDefined(first && last)}>
    {first} <strong>{last}</strong>
  </Display>
)
Name.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string,
}

const Poste = ({ poste }) => (
  <Display className='awesome' predicate={isDefined(poste)}>
    {poste}
  </Display>
)
Poste.propTypes = {
  poste: PropTypes.string,
}

const Address = ({ address }) => (
  <Display predicate={isDefined(address)}>{address}</Display>
)
Address.propTypes = {
  address: PropTypes.string,
}

const Socials = ({ tel, mail, github, linkedin }) => (
  <div>
    <Display Tag='span' predicate={isDefined(tel)}>
      <Icon Comp={FiPhone} />
      {tel}
    </Display>{' '}
    <Display Tag='span' predicate={isDefined(mail)}>
      <Icon Comp={FiMail} />
      <A href={`mailto:${mail}`}>{mail}</A>
    </Display>{' '}
    <Display Tag='span' predicate={isDefined(github)}>
      {() => (
        <span>
          <Icon Comp={FaGithub} />
          <A href={github}>{GITHUB_REG.exec(github)[1]}</A>
        </span>
      )}
    </Display>{' '}
    <Display Tag='span' predicate={isDefined(linkedin)}>
      {() => (
        <span>
          <Icon Comp={FaLinkedin} />
          <A href={linkedin}>{LINKEDIN_REG.exec(linkedin)[1]}</A>
        </span>
      )}
    </Display>
  </div>
)
Socials.propTypes = {
  tel: PropTypes.string,
  mail: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string,
}

/* ---------------------------------------------------------------- */

const General = ({ general }) => (
  <div className='text-center'>
    <Name first={general.firstName} last={general.lastName} />
    <Poste poste={general.poste} />
    <Address address={general.address} />
    <Socials
      tel={general.tel}
      mail={general.mail}
      github={general.github}
      linkedin={general.linkedin}
    />
  </div>
)
General.propTypes = {
  general: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    poste: PropTypes.string,
    address: PropTypes.string,
    tel: PropTypes.string,
    mail: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string,
  }).isRequired,
}

export { General as default }
