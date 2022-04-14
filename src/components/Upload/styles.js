import styled, { css } from 'styled-components';

const dragActive = css`
    border-color: #78e5d5;
`
const dragRefect = css`
    border-color: #e57878;
`

export const DropContainer = styled.div.attrs({ className: 'Dropzone' })`
    border: 1px dashed #ddd;
    border-radius: 4px;
    cursor: pointer;

    transition: height 0.2s ease;

    ${props => props.isDragActive && dragActive}
    ${props => props.isDragReject && dragRefect}
`;

const messageColors = {
    default: '#999',
    error: '#e57878',
    success: '#78e5d5'
}

export const UploadMessage = styled.p`
    display: flex;
    color: ${props => messageColors[props.type || 'default']};
    justify-content: center;
    align-items: center;
    padding: 15px 0;
`
