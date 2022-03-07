module.exports = {
    root: true,
    env: {
        node: true
    },
    globals: {
        // Ref sugar (take 2)
        $: 'readonly',
        $$: 'readonly',
        $ref: 'readonly',
        $shallowRef: 'readonly',
        $computed: 'readonly',

        // index.d.ts
        // global.d.ts
        Fn: 'readonly',
        PromiseFn: 'readonly',
        RefType: 'readonly',
        LabelValueOptions: 'readonly',
        EmitType: 'readonly',
        TargetContext: 'readonly',
        ComponentElRef: 'readonly',
        ComponentRef: 'readonly',
        ElRef: 'readonly',
        global: 'readonly',
        ForDataType: 'readonly',
        ComponentRoutes: 'readonly',

        // script setup
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly'
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', '@vue/prettier', '@vue/eslint-config-typescript'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        jsxPragma: 'React',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'vue/no-v-html': 'off',
        'vue/require-default-prop': 'off',
        'vue/require-explicit-emits': 'off',
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-explicit-any': 'off', // any
        'no-debugger': 'warn',
        'no-console': 'warn',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-use-before-define': 'error', // 禁止在变量定义之前使用它们
        'block-scoped-var': 'error', // 强制把变量的使用限制在其定义的作用域范围内
        'no-shadow': 'error', // 禁止变量声明与外层作用域的变量同名
        '@typescript-eslint/explicit-module-boundary-types': 'off', // setup() ts每个函数都要显式声明返回值
        'no-empty': 1, // 块语句中的内容不能为空
        'no-constant-condition': 2, // 禁止在条件中使用常量表达式 if(true) if(1)
        'no-else-return': 0, // 如果if语句里面有return,后面不能跟else语句
        'no-multi-spaces': 1, // 不能用多余的空格
        'quote-props': [0, 'as-needed'], // 对象字面量中的属性名是否强制双引号
        'consistent-return': 2, // return 后面是否允许省略
        'accessor-pairs': 2, // 在对象中使用getter/setter
        'dot-location': [2, 'property'], // 对象访问符的位置，换行的时候在行首还是行尾
        'no-lone-blocks': 2, // 禁止不必要的嵌套块
        'no-labels': 2, // 禁止标签声明
        'no-extend-native': 2, // 禁止扩展native对象
        'no-floating-decimal': 2, // 禁止省略浮点数中的0 .5 3.
        'no-loop-func': 2, // 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
        'no-new-func': 2, // 禁止使用new Function
        'no-self-compare': 2, // 不能比较自身
        'no-sequences': 2, // 禁止使用逗号运算符
        'no-throw-literal': 2, // 禁止抛出字面量错误 throw "error";
        'no-return-assign': [2, 'always'], // return 语句中不能有赋值表达式
        'no-useless-call': 2, // 禁止不必要的call和apply
        'no-useless-concat': 2, // 禁止不必要的字符串连接
        'no-with': 2, // 禁用with
        'space-infix-ops': 2, // 中缀操作符周围要不要有空格
        'block-spacing': [2, 'always'], // 在打开块之后和关闭块之前禁止或强制在块内使用空格（块间距）
        'no-spaced-func': 2, // 不允许在函数标识符及其应用程序之间使用空格（无空格功能）
        'no-whitespace-before-property': 2, // 禁止在属性前使用空格（属性前无空格）
        'no-irregular-whitespace': 'off', // 禁止不规则空格（无不规则空格）
        'no-mixed-spaces-and-tabs': 2, // 不允许使用缩进的空格和制表符进行缩进（无空格和制表符）
        'no-regex-spaces': 2, // 禁止在正则表达式文字中使用多个空格（无正则表达式空格）
        'no-trailing-spaces': 2, // 在行尾禁止尾随空格（无尾随空格）
        'space-before-blocks': [2, 'always'], // 要求或禁止在块前加空格（块前加空格）
        'space-before-function-paren': [0, 'never'], // 函数括号前需要或不允许空格（space-before-function-paren）
        'space-in-parens': [2, 'never'], // 禁止或在括号内使用空格（中间空格）
        'template-curly-spacing': [2, 'never'], // 在模板字符串中强制使用间距（template-curly-spacing）
        'yield-star-spacing': [2, 'both'], // 在yield *表达式中的*周围加空格（yield-star-spacing）
        'array-bracket-spacing': [2, 'never'], // 禁止或在方括号内加空格（array-bracket-spacing）
        'no-duplicate-imports': 1, // 禁止重复导入（无重复导入）
        '@typescript-eslint/interface-name-prefix': 0, // interface 命名规则修改
        camelcase: 1, // 强制驼峰法命名
        quotes: [1, 'single'], // 引号风格
        semi: [0, 'always'], // 强制语句分号结尾
        curly: 1, // 必须使用 if(){} 中的{}
        'semi-spacing': [
            2,
            {
                // 强制分号之前和之后使用一致的空格
                before: false,
                after: true
            }
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }
        ],
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }
        ],
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto'
            }
        ],
        'arrow-spacing': [
            2,
            {
                before: true,
                after: true
            }
        ],
        'key-spacing': [
            1,
            {
                // 对象字面量中冒号的前后空格
                beforeColon: false,
                afterColon: true
            }
        ],
        'no-redeclare': [
            2,
            {
                // 禁止重复声明变量
                builtinGlobals: true
            }
        ],
        'no-unused-expressions': [
            2,
            {
                // 禁止无用的表达式
                allowShortCircuit: true,
                allowTernary: true
            }
        ],
        'valid-jsdoc': [
            2,
            {
                // jsdoc规则 https://eslint.org/docs/rules/valid-jsdoc
                requireParamDescription: true,
                requireReturnDescription: true
            }
        ],
        'no-warning-comments': [
            1,
            {
                // 不能有警告备注
                terms: ['todo', 'fixme', 'any other term'],
                location: 'anywhere'
            }
        ],
        'comma-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ], // 加强逗号之间的间隔（逗号间隔）
        'generator-star-spacing': [
            2,
            {
                before: true,
                after: true
            }
        ], // 在生成器函数（generator-star-spacing）中的*周围加空格
        'keyword-spacing': [
            2,
            {
                before: true,
                after: true
            }
        ], // 在关键字前后强制保持一致的间距（关键字间距）
        'space-unary-ops': [
            2,
            {
                words: true,
                nonwords: false
            }
        ], // 一元运算符之前或之后需要空格或不允许空格（space-unary-ops）
        'spaced-comment': [
            2,
            'always',
            {
                markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
            }
        ] // 要求或不允许以空格（制表符或制表符）开头的注释（带空格的注释）
    }
};
