import { describe, it, expect } from 'vitest'
import { validateInput, MAX_TEXT_LENGTH } from '../functions/api/_lib/validate'

describe('validateInput', () => {
  it('rejects an empty string', () => {
    expect(validateInput({ text: '' })).not.toBeNull()
  })

  it('rejects a whitespace-only string', () => {
    expect(validateInput({ text: '   ' })).not.toBeNull()
  })

  it('rejects text over MAX_TEXT_LENGTH characters', () => {
    const longText = 'a'.repeat(MAX_TEXT_LENGTH + 1)
    expect(validateInput({ text: longText })).not.toBeNull()
  })

  it('accepts a valid short text', () => {
    expect(validateInput({ text: 'I work at a school.' })).toBeNull()
  })

  it('accepts a valid detailed text', () => {
    const text = 'I work at a school, I have two kids, and I run on weekends. My mornings are usually hectic but my evenings are quiet. I cook dinner most nights and call my sister on Sundays.'
    expect(validateInput({ text })).toBeNull()
  })

  it('rejects a non-object body (string)', () => {
    expect(validateInput('not an object')).not.toBeNull()
  })

  it('rejects a non-object body (number)', () => {
    expect(validateInput(42)).not.toBeNull()
  })

  it('rejects a non-object body (array)', () => {
    expect(validateInput(['text', 'hello'])).not.toBeNull()
  })

  it('rejects null body', () => {
    expect(validateInput(null)).not.toBeNull()
  })

  it('rejects undefined body', () => {
    expect(validateInput(undefined)).not.toBeNull()
  })

  it('accepts text containing script tags (model handles sanitization)', () => {
    const text = 'I work at a school. <script>alert("xss")</script>'
    expect(validateInput({ text })).toBeNull()
  })

  it('accepts text containing SQL injection patterns (model handles it)', () => {
    const text = "I work at a school. ' OR 1=1; DROP TABLE users;--"
    expect(validateInput({ text })).toBeNull()
  })

  it('accepts body with null followupChip', () => {
    expect(validateInput({ text: 'I work at a school.', followupChip: null })).toBeNull()
  })

  it('accepts body with string followupChip', () => {
    expect(validateInput({ text: 'I work at a school.', followupChip: 'mornings' })).toBeNull()
  })

  it('rejects body with numeric followupChip', () => {
    expect(validateInput({ text: 'I work at a school.', followupChip: 123 })).not.toBeNull()
  })

  it('accepts body with null followupText', () => {
    expect(validateInput({ text: 'I work at a school.', followupText: null })).toBeNull()
  })

  it('accepts body with string followupText', () => {
    expect(validateInput({ text: 'I work at a school.', followupText: 'mornings are quiet' })).toBeNull()
  })

  it('rejects body with numeric followupText', () => {
    expect(validateInput({ text: 'I work at a school.', followupText: 999 })).not.toBeNull()
  })

  it('accepts text exactly at MAX_TEXT_LENGTH', () => {
    const text = 'a'.repeat(MAX_TEXT_LENGTH)
    expect(validateInput({ text })).toBeNull()
  })
})
