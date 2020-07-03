import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer><Link to={`/shop/${encodeURI(title.toLowerCase())}`}>{title.toUpperCase()}</Link></TitleContainer>
    <PreviewContainer>
      {
        items
        // Only display 4 items in the preview.
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </PreviewContainer>
  </CollectionPreviewContainer>
)

export default CollectionPreview;
