import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../../Environment';

import LoadingState from '../LoadingState/LoadingState';

import './TagList.css';

const TagList = ({ handleSelectTag, selectedTag }) => {
  return (
    <QueryRenderer
      environment={environment}
      variables={{}}
      query={graphql`
        query TagListQuery {
          me {
            tags {
              edges {
                node {
                  id,
                  name
                }
              }
            }
          }
        }
      `}
      render={({ error, props }) => {
        if (error) return <div>{console.log(error)}Error!</div>;
        return (
          <div className="TagList__Wrapper">
            <div className="TagList__Header">
              <h3>Tags</h3>
              <span
                className="TagList__Clear"
                onClick={() => handleSelectTag({ id: undefined })}
              >
                Clear
              </span>
            </div>
            <div className="TagList__List">
              {props ? props.me.tags.edges.map(tagNode => {
                const tag = tagNode.node;
                const tagClasses = ['TagList__Item', 'FloatingCard']
                if (selectedTag === tag.id) tagClasses.push('TagList__Item_Active')

                return (
                  <li
                    key={tag.id}
                    className={tagClasses.join(' ')}
                    onClick={() => handleSelectTag(tag)}
                  >
                    {tag.name}
                  </li>
                );
              }) : <LoadingState />}
            </div>
          </div>
        );
      }}
    />
  );
};

export default TagList;
