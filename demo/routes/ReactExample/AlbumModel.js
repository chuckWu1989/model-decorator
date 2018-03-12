// Model
import PropTypes from 'prop-types';
import { BaseModel, DefineProps, Type, Required, StringLen, Regex, Range, DisplayName, DefaultValue } from '../../../src';

class AlbumModel extends BaseModel {
  @DefineProps({ checkDefault: false })
  @DisplayName('Genere')
  @Type(PropTypes.number)
  @DefaultValue(-1)
  @Required({ errorMessage: '* Genere is required!', criterions: value => value !== -1 })
  genre

  @DefineProps({ checkDefault: false })
  @DisplayName('Artist')
  @Type(PropTypes.number)
  @DefaultValue(-1)
  @Required({ errorMessage: '* Artist is required!', criterions: value => value !== -1 })
  artist

  @DefineProps({ checkDefault: false })
  @DisplayName('Title')
  @Type(PropTypes.string)
  @Required({ errorMessage: '* Title is required!', criterions: value => value !== '' })
  @DefaultValue('')
  @StringLen([, 20], { errorMessage: '* Exceed the max length 20 of string' })
  title

  @DefineProps()
  @DisplayName('Price')
  @Type(PropTypes.number)
  @Range([0.01, 100], { errorMessage: '* Price must between 0.01 and 100' })
  price

  @DefineProps()
  @DisplayName('Album Art URL')
  @Type(PropTypes.string)
  @Regex(/^$|^(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?$/, { errorMessage: '* Error format of website' })
  url
}

export default AlbumModel;
