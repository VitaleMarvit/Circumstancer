import React from 'react';
import { NavLand } from '../369Project/Nav';
import { HeaderLand } from "../369Project/Header"
import { ProyectLand } from '../369Project/Proyect';
import { UtilidadesLand } from '../369Project/Utilidades';
import { MemberVip } from '../369Project/MemberVip';
import { TeamLand } from '../369Project/Team-Proyect';


function Land() {
  return (
    <React.Fragment>
      <NavLand />
      <HeaderLand />
      <ProyectLand />
      <UtilidadesLand />
      <MemberVip />
      <TeamLand />
    </React.Fragment>
  );
}

export { Land };