import toFile from '../writing/toFile'

// Outputs a SHP file stream
export default () =>
  toFile({ format: 'ESRI Shapefile' })
