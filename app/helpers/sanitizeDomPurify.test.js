const DOMPurify = require('isomorphic-dompurify');

describe('sanitizeReqDomPurify middleware',() => {
  test('should return empty string', () => {
    const result = DOMPurify.sanitize()
    expect(result).toBe('')
  });
  test('should return string', () => {
    const message = 'string'
    const result = DOMPurify.sanitize(message)
    expect(result).toBe('string')
  });
  test('should return <p>string</p>', () => {
    const message = '<p>string</p>'
    const result = DOMPurify.sanitize(message)
    expect(result).toBe('<p>string</p>')
  });
  test('should return empty string', () => {
    const message = '<script>string</script>'
    const result = DOMPurify.sanitize(message)
    expect(result).toBe('')
  });
  test('should return tototiti', () => {
    const message = 'toto<script>string</script>titi'
    const result = DOMPurify.sanitize(message)
    expect(result).toBe('tototiti')
  })

})