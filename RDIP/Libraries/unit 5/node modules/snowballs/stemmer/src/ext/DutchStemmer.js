/*!
 * Snowball JavaScript Library v0.3
 * http://code.google.com/p/urim/
 * http://snowball.tartarus.org/
 *
 * Copyright 2010, Oleg Mazko
 * http://www.mozilla.org/MPL/
 */

function DutchStemmer() {
	var a_0 = [new Among("", -1, 6), new Among("\u00E1", 0, 1),
			new Among("\u00E4", 0, 1), new Among("\u00E9", 0, 2),
			new Among("\u00EB", 0, 2), new Among("\u00ED", 0, 3),
			new Among("\u00EF", 0, 3), new Among("\u00F3", 0, 4),
			new Among("\u00F6", 0, 4), new Among("\u00FA", 0, 5),
			new Among("\u00FC", 0, 5)], a_1 = [new Among("", -1, 3),
			new Among("I", 0, 2), new Among("Y", 0, 1)], a_2 = [
			new Among("dd", -1, -1), new Among("kk", -1, -1),
			new Among("tt", -1, -1)], a_3 = [new Among("ene", -1, 2),
			new Among("se", -1, 3), new Among("en", -1, 2),
			new Among("heden", 2, 1), new Among("s", -1, 3)], a_4 = [
			new Among("end", -1, 1), new Among("ig", -1, 2),
			new Among("ing", -1, 1), new Among("lijk", -1, 3),
			new Among("baar", -1, 4), new Among("bar", -1, 5)], a_5 = [
			new Among("aa", -1, -1), new Among("ee", -1, -1),
			new Among("oo", -1, -1), new Among("uu", -1, -1)], g_v = [17, 65,
			16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128], g_v_I = [1, 0, 0,
			17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128], g_v_j = [
			17, 67, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128], I_p2, I_p1, B_e_found, sbp = new SnowballProgram();
	this.setCurrent = function(word) {
		sbp.setCurrent(word);
	};
	this.getCurrent = function() {
		return sbp.getCurrent();
	};
	function r_prelude() {
		var among_var, v_1 = sbp.cursor, v_2, v_3;
		while (true) {
			sbp.bra = sbp.cursor;
			among_var = sbp.find_among(a_0, 11);
			if (among_var) {
				sbp.ket = sbp.cursor;
				switch (among_var) {
					case 1 :
						sbp.slice_from("a");
						continue;
					case 2 :
						sbp.slice_from("e");
						continue;
					case 3 :
						sbp.slice_from("i");
						continue;
					case 4 :
						sbp.slice_from("o");
						continue;
					case 5 :
						sbp.slice_from("u");
						continue;
					case 6 :
						if (sbp.cursor >= sbp.limit)
							break;
						sbp.cursor++;
						continue;
				}
			}
			break;
		}
		sbp.cursor = v_1;
		sbp.bra = v_1;
		if (sbp.eq_s(1, "y")) {
			sbp.ket = sbp.cursor;
			sbp.slice_from("Y");
		} else
			sbp.cursor = v_1;
		while (true) {
			v_2 = sbp.cursor;
			if (sbp.in_grouping(g_v, 97, 232)) {
				v_3 = sbp.cursor;
				sbp.bra = v_3;
				if (sbp.eq_s(1, "i")) {
					sbp.ket = sbp.cursor;
					if (sbp.in_grouping(g_v, 97, 232)) {
						sbp.slice_from("I");
						sbp.cursor = v_2;
					}
				} else {
					sbp.cursor = v_3;
					if (sbp.eq_s(1, "y")) {
						sbp.ket = sbp.cursor;
						sbp.slice_from("Y");
						sbp.cursor = v_2;
					} else if (habr1(v_2))
						break;
				}
			} else if (habr1(v_2))
				break;
		}
	}
	function habr1(v_1) {
		sbp.cursor = v_1;
		if (v_1 >= sbp.limit)
			return true;
		sbp.cursor++;
		return false;
	}
	function r_mark_regions() {
		I_p1 = sbp.limit;
		I_p2 = I_p1;
		if (!habr2()) {
			I_p1 = sbp.cursor;
			if (I_p1 < 3)
				I_p1 = 3;
			if (!habr2())
				I_p2 = sbp.cursor;
		}
	}
	function habr2() {
		while (!sbp.in_grouping(g_v, 97, 232)) {
			if (sbp.cursor >= sbp.limit)
				return true;
			sbp.cursor++;
		}
		while (!sbp.out_grouping(g_v, 97, 232)) {
			if (sbp.cursor >= sbp.limit)
				return true;
			sbp.cursor++;
		}
		return false;
	}
	function r_postlude() {
		var among_var;
		while (true) {
			sbp.bra = sbp.cursor;
			among_var = sbp.find_among(a_1, 3);
			if (among_var) {
				sbp.ket = sbp.cursor;
				switch (among_var) {
					case 1 :
						sbp.slice_from("y");
						break;
					case 2 :
						sbp.slice_from("i");
						break;
					case 3 :
						if (sbp.cursor >= sbp.limit)
							return;
						sbp.cursor++;
						break;
				}
			}
		}
	}
	function r_R1() {
		return I_p1 <= sbp.cursor;
	}
	function r_R2() {
		return I_p2 <= sbp.cursor;
	}
	function r_undouble() {
		var v_1 = sbp.limit - sbp.cursor;
		if (sbp.find_among_b(a_2, 3)) {
			sbp.cursor = sbp.limit - v_1;
			sbp.ket = sbp.cursor;
			if (sbp.cursor > sbp.limit_backward) {
				sbp.cursor--;
				sbp.bra = sbp.cursor;
				sbp.slice_del();
			}
		}
	}
	function r_e_ending() {
		var v_1;
		B_e_found = false;
		sbp.ket = sbp.cursor;
		if (sbp.eq_s_b(1, "e")) {
			sbp.bra = sbp.cursor;
			if (r_R1()) {
				v_1 = sbp.limit - sbp.cursor;
				if (sbp.out_grouping_b(g_v, 97, 232)) {
					sbp.cursor = sbp.limit - v_1;
					sbp.slice_del();
					B_e_found = true;
					r_undouble();
				}
			}
		}
	}
	function r_en_ending() {
		var v_1;
		if (r_R1()) {
			v_1 = sbp.limit - sbp.cursor;
			if (sbp.out_grouping_b(g_v, 97, 232)) {
				sbp.cursor = sbp.limit - v_1;
				if (!sbp.eq_s_b(3, "gem")) {
					sbp.cursor = sbp.limit - v_1;
					sbp.slice_del();
					r_undouble();
				}
			}
		}
	}
	function r_standard_suffix() {
		var among_var, v_1 = sbp.limit - sbp.cursor, v_2, v_3, v_4, v_5, v_6;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_3, 5);
		if (among_var) {
			sbp.bra = sbp.cursor;
			switch (among_var) {
				case 1 :
					if (r_R1())
						sbp.slice_from("heid");
					break;
				case 2 :
					r_en_ending();
					break;
				case 3 :
					if (r_R1() && sbp.out_grouping_b(g_v_j, 97, 232))
						sbp.slice_del();
					break;
			}
		}
		sbp.cursor = sbp.limit - v_1;
		r_e_ending();
		sbp.cursor = sbp.limit - v_1;
		sbp.ket = sbp.cursor;
		if (sbp.eq_s_b(4, "heid")) {
			sbp.bra = sbp.cursor;
			if (r_R2()) {
				v_2 = sbp.limit - sbp.cursor;
				if (!sbp.eq_s_b(1, "c")) {
					sbp.cursor = sbp.limit - v_2;
					sbp.slice_del();
					sbp.ket = sbp.cursor;
					if (sbp.eq_s_b(2, "en")) {
						sbp.bra = sbp.cursor;
						r_en_ending();
					}
				}
			}
		}
		sbp.cursor = sbp.limit - v_1;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_4, 6);
		if (among_var) {
			sbp.bra = sbp.cursor;
			switch (among_var) {
				case 1 :
					if (r_R2()) {
						sbp.slice_del();
						v_3 = sbp.limit - sbp.cursor;
						sbp.ket = sbp.cursor;
						if (sbp.eq_s_b(2, "ig")) {
							sbp.bra = sbp.cursor;
							if (r_R2()) {
								v_4 = sbp.limit - sbp.cursor;
								if (!sbp.eq_s_b(1, "e")) {
									sbp.cursor = sbp.limit - v_4;
									sbp.slice_del();
									break;
								}
							}
						}
						sbp.cursor = sbp.limit - v_3;
						r_undouble();
					}
					break;
				case 2 :
					if (r_R2()) {
						v_5 = sbp.limit - sbp.cursor;
						if (!sbp.eq_s_b(1, "e")) {
							sbp.cursor = sbp.limit - v_5;
							sbp.slice_del();
						}
					}
					break;
				case 3 :
					if (r_R2()) {
						sbp.slice_del();
						r_e_ending();
					}
					break;
				case 4 :
					if (r_R2())
						sbp.slice_del();
					break;
				case 5 :
					if (r_R2() && B_e_found)
						sbp.slice_del();
					break;
			}
		}
		sbp.cursor = sbp.limit - v_1;
		if (sbp.out_grouping_b(g_v_I, 73, 232)) {
			v_6 = sbp.limit - sbp.cursor;
			if (sbp.find_among_b(a_5, 4) && sbp.out_grouping_b(g_v, 97, 232)) {
				sbp.cursor = sbp.limit - v_6;
				sbp.ket = sbp.cursor;
				if (sbp.cursor > sbp.limit_backward) {
					sbp.cursor--;
					sbp.bra = sbp.cursor;
					sbp.slice_del();
				}
			}
		}
	}
	this.stem = function() {
		var v_1 = sbp.cursor;
		r_prelude();
		sbp.cursor = v_1;
		r_mark_regions();
		sbp.limit_backward = v_1;
		sbp.cursor = sbp.limit;
		r_standard_suffix();
		sbp.cursor = sbp.limit_backward;
		r_postlude();
		return true;
	}
}