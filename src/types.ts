
export interface ScriptOption {
  label: string;
  agentResponse: string;
  nextStepId?: string;
}

export interface ScriptStep {
  id: string;
  phase: string;
  agentScript: string;
  customerOptions: ScriptOption[];
  coreLogic?: string;
}

export interface MenuItem {
  id: string;
  label: string;
  children?: {
    id: string;
    label: string;
    buttons: string[];
  }[];
  buttons?: string[];
}

export type MenuData = MenuItem[];

export type CustomerType = 'existing' | 'new';
