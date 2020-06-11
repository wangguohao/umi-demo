import React from 'react';
import cs from 'classnames';
import './index.less';

const alignCls = {
  'flex-start': 'align-left',
  'center': 'align-center',
  'flex-end': 'align-right'
}

interface IField {
  label?: string; // label值
  colon?: boolean; // 冒号
  children: any; // 值
  align?: 'flex-start' | 'center' | 'flex-end'; // 对齐方式
  direction?: 'horizontal' | 'vertical'; // 排列方向
}

const Field = (props: IField) => {
  const {
    label,
    colon,
    children,
    align = 'flex-start',
    direction = 'horizontal',
  } = props;

  return (
    <div className={cs('field', alignCls[align] || '', direction)}>
      {label && (
        <div className="field-label">
          {label}
          {colon && <span>：</span>}
        </div>
      )}
      <div className="field-value">{children}</div>
    </div>
  );
};

interface IValue {
  children?: any;
}
const Value = (props: IValue) => {
  return (
    <div className="cp-display-text">
      <div className="text-wrapper">
        <span className="taro-text">{props.children}</span>
      </div>
    </div>
  );
};

interface IFields {
  align?: 'flex-start' | 'center' | 'flex-end'; // 对齐方式
  direction?: 'horizontal' | 'vertical'; // 排列方向
  fields: IField[];
}
const Fields = (props: IFields) => {
  const { align, direction, fields } = props;

  return <div className={cs("fields", alignCls[align] || '', direction)}>
    {
      fields.map(field => <Field {...field}>{field.children}</Field>)
    }
  </div>;
};

export default () => {
  const fields: IField[] = [
    {
      label: '公司名称',
      colon: true,
      children: '上海爱湃斯科技有限公司',
    },
    {
      label: '招聘人数',
      colon: false,
      children: '2人'
    },
    {
      label: '公司性质',
      children: '民营企业'
    }
  ]
  return (
    <div className="flex">
      <Field direction="vertical">
        <Value>上海青浦区</Value>
      </Field>
      <br/>
      <Field label="文本2" colon align="center" direction="vertical">
        <Value>3年</Value>
      </Field>
      <br/>
      <Field label="文本3" align="flex-end" direction="vertical">
        <Value>本科及以上</Value>
      </Field>
      <br/>
      <Fields fields={fields} align="flex-end" direction="vertical" />
      <br/>
      <Fields fields={fields} align="center" direction="vertical" />
      <br/>
      <Fields fields={fields} direction="vertical" />
    </div>
  );
};
