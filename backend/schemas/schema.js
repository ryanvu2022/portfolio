// Import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import works from './works'
import skills from './skills'
import contact from './contact'

// Give our schema to the builder and provide the result to Sanity
export default createSchema({
  // Name the schema
  name: 'default',
  // Concatenate the document type to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Types
    works,  
    skills, 
    contact    
  ]),
})
