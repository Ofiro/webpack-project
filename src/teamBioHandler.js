// teamBioHandler.js

import { getDataAttribute } from './config.js';

export function handleTeamBioPopup() {
    const teamMembers = document.querySelectorAll('.team_member_item');
    teamMembers.forEach(member => {
        member.addEventListener('mouseover', () => {
            const name = getDataAttribute(member, 'name');
            const role = getDataAttribute(member, 'role');
            const bio = getDataAttribute(member, 'bio');

            document.querySelector('.team_bio_popup .team_member_name').textContent = name;
            document.querySelector('.team_bio_popup .team_member_role').textContent = role;
            document.querySelector('.team_bio_popup .team_member_bio').textContent = bio;
        });
    });
}
