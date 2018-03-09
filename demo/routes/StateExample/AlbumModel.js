import PropTypes from 'prop-types';
import { BaseModel, DefineProps, Type, Required, StringLen, Regex, Range, DisplayName } from '../../../src';

class AlbumModel extends BaseModel {
  @DefineProps
  @DisplayName('Genere')
  @Type(PropTypes.number)
  @Required({ errorMessage: '* Genere is required!', criterions: value => value !== -1 })
  genre

  @DefineProps
  @DisplayName('Artist')
  @Type(PropTypes.number)
  @Required({ errorMessage: '* Artist is required!', criterions: value => value !== -1 })
  artist

  @DefineProps
  @DisplayName('Title')
  @Type(PropTypes.string)
  @Required({ errorMessage: '* Title is required!' })
  @StringLen([, 20], { errorMessage: '* Exceed the max length 20 of string' })
  title

  @DefineProps
  @DisplayName('Price')
  @Type(PropTypes.number)
  @Range([0.01, 100], { errorMessage: '* Price must between 0.01 and 100' })
  price

  @DefineProps
  @DisplayName('Album Art URL')
  @Type(PropTypes.string)
  @Regex(/^$|^(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?$/, { errorMessage: '* Error format of website' })
  url
}

export default AlbumModel;
