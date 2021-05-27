import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import PropTypes from 'prop-types'
import React from 'react'
import ToggleDisplay from 'common/toggle-display'
import { AiFillCloseCircle } from 'react-icons/ai'
import { CenterBlock } from 'common'

export default class Languages extends React.Component {
  _mutateLanguages = cb => {
    let { onChange, languages } = this.props
    languages = [...languages]
    cb(languages)
    onChange(languages)
  }

  _addLanguage = () =>
    this._mutateLanguages(skills =>
      skills.unshift({
        language: '',
        level: '',
      })
    )

  _onLanguageChange = ({ target }) =>
    this._mutateLanguages(languages => {
      const { key, field } = target.dataset
      languages[key][field] = target.value
    })

  _delLanguage = ({ target }) =>
    this._mutateLanguages(languages => languages.splice(target.dataset.key, 1))

  render() {
    return (
      <ToggleDisplay title='Langues'>
        <Col>
          <CenterBlock className='mb-2'>
            <Button variant='success' onClick={this._addLanguage}>
              Add
            </Button>
          </CenterBlock>

          <ListGroup style={{ display: 'block', width: '100%' }}>
            {this.props.languages.map(({ language, level }, key) => (
              <ListGroup.Item key={key}>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Langue</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    data-field='language'
                    data-key={key}
                    onChange={this._onLanguageChange}
                    value={language}
                  />

                  <InputGroup.Prepend>
                    <InputGroup.Text>Niveau</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    data-field='level'
                    data-key={key}
                    onChange={this._onLanguageChange}
                    value={level}
                  />

                  <InputGroup.Append>
                    <InputGroup.Text
                      className='text-danger'
                      onClick={this._delLanguage}
                      data-key={key}
                      style={{ cursor: 'pointer' }}
                    >
                      <AiFillCloseCircle />
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </ToggleDisplay>
    )
  }
}
Languages.propTypes = {
  onChange: PropTypes.func.isRequired,
  languages: PropTypes.array,
}
Languages.defaultProps = {
  languages: [],
}
