const config = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'react/no-did-update-set-state': 0,
    'react/no-find-dom-node': 0,
    'import/no-extraneous-dependencies': 0,
    'react/sort-comp': 0,
    'react-hooks/exhaustive-deps': 0,
    '@typescript-eslint/no-invalid-this': 0,
  },
};

module.exports = config;
