const DOMPurify = require('isomorphic-dompurify');
const {sanitizeRequest} = require('./sanitizeReqDomPurify')

describe('isomorphic-dompurify',() => {
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

});

describe('sanitizeRequest',() => {
  test('should be defined ', () => {
    const result = sanitizeRequest('body',{})
    // console.log('result ', result)
    expect(result).toBe('empty boby');
  });
  test('should be titi ', () => {
    const result = sanitizeRequest('body',{'body' : {user:'titi'}})
    // console.log('result ', result)
    expect(result).toStrictEqual({'body' : {user:'titi'}});
  });
  test('should be toto ', () => {
    const result = sanitizeRequest('body',{'body' : {user:'<script>tdsklj</script>titi'}})
    // console.log('result ', result)
    expect(result).toStrictEqual({'body' : {user:'titi'}});
  });
});