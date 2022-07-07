import React from 'react';
import IWorkspaceInternalProps from '../internal/workspaces/workspaceInternalProps';

const WorkspaceContext = React.createContext < IWorkspaceInternalProps | undefined >(undefined);

export default WorkspaceContext;
