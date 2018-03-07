import { connect } from 'react-redux';
import FavoriteAddVideoButton from './FavoriteAddVideoButton';

// Actions
import { addVideoFavorite } from './favoriteVideosActions';

const mapDispatchToProps = dispatch => ({
  onClickAddVideo: video => dispatch(addVideoFavorite(video)),
});

export default connect(undefined, mapDispatchToProps)(FavoriteAddVideoButton);
