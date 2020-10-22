import axios from "@/api/axios";

const endpoint = "meeting";

export const namespaced = true;

export const state = {
  meetings: [],
  meeting: {},
};

export const mutations = {
  SET_MEETINGS(state, meetings) {
    state.meetings = meetings;
  },
  SET_MEETING(state, meeting) {
    state.meeting = meeting;
  },
};

export const actions = {
  getAllMeetingInStudent({ commit }) {
    return axios
      .get(`/${endpoint}/invited`)
      .then((response) => {
        commit("SET_MEETINGS", response.data.allMeeting);
        return response.data;
      })
      .catch((error) => Promise.reject(error));
  },
  getMeeting({ commit, getters }, meetingId) {
    if (meetingId == state.meeting.meetingId) return state.meeting;

    let target = getters.getByMeetingId(meetingId);

    if (target) {
      commit("SET_MEETING", target);
      return target;
    }

    return axios
      .get(`/${endpoint}/${meetingId}`)
      .then((response) => {
        commit("SET_MEETING", response.data.target);
        return response.data;
      })
      .catch((error) => Promise.reject(error));
  },
};

export const getters = {
  getByMeetingId: (state) => (meetingId) => {
    return state.meetings.find((meeting) => meeting.meetingId == meetingId);
  },
};
