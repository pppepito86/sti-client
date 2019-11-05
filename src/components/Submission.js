import React from 'react'

function SubmissionOverview() {
    return (
      <div className="box-body">
      <table style={{tableLayout: 'fixed', wordWrap: 'break-word'}} className="table table-bordered">
         <tbody><tr>
           <th>Час</th>
           <th>Група</th>
           <th>Задача</th>
           <th>Точки</th>
           <th style={{width: '50%'}}>Статус</th>
         </tr>
         <tr>
           <td>03.11.19 14:04:04</td>
           <td>C</td>
           <td>words</td>
           <td>0</td>
           <td>OK,TL,TL,OK,TL,OK,OK,OK,OK,TL,OK,TL,TL,TL,TL,TL,TL,TL,TL,TL</td>
         </tr>
       </tbody></table>
     </div>
    )
}

function SubmissionDetails() {
  return (
    <div className="box-body">
    <table style={{tableLayout: 'fixed', wordWrap: 'break-word'}} className="table table-bordered table-striped">
      <tbody><tr>
        <th>Стъпка</th>
        <th>Резултат</th>
        <th>Време</th>
      </tr>
      <tr>
        <td>Група 1</td>
        <td style={{backgroundColor: '#ff0000'}}></td>
      <td></td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 1</td>
<td>OK</td>
        <td>0.26</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 2</td>
<td>TL</td>
        <td>2.002</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 3</td>
<td>TL</td>
        <td>2.002</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 4</td>
<td>OK</td>
        <td>0.64</td>
      </tr>
      <tr>
        <td>Група 2</td>
        <td style={{backgroundColor: '#ff0000'}}></td>
        <td></td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 5</td>
<td>TL</td>
        <td>2.002</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 6</td>
<td>OK</td>
        <td>0.38</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 7</td>
<td>OK</td>
        <td>0.79</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 8</td>
<td>OK</td>
        <td>0.63</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 9</td>
<td>OK</td>
        <td>0.2</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 10</td>
<td>TL</td>
        <td>2.003</td>
      </tr>
      <tr>
        <td>Група 3</td>
        <td style={{backgroundColor: '#ff0000'}}></td>
        <td></td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 11</td>
<td>OK</td>
        <td>0.45</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 12</td>
<td>TL</td>
        <td>2.002</td>
      </tr>
    </tbody></table>
  </div>
  )
}

function SubmissionSource() {
  return (
    <pre>{`#include&lt;bits/stdc++.h&gt;
    //#define endl '\n'
    using namespace std;
    
    bool m[100001];
    
    bool match(const string&amp; s, const string&amp; w, int start) {
        for (int i = 0; i &lt; w.size(); i++) {
            if (start+i &gt;= s.size()) return false;
            if (w[i] != s[start+i]) return false;
        }
        return true;
    }
    
    void matches(const string&amp; s, const string&amp; w) {
        for (int i = 0; i &lt; s.size(); i++) {
            m[i+1] = match(s,w,i);
        }
    }
    
    int main() {
        ios_base::sync_with_stdio(false);
        cin.tie(NULL);
    
        string s, w; cin &gt;&gt; s &gt;&gt; w;
        matches(s, w);
    
        int q; cin &gt;&gt; q;
        while (q--) {
            int a, b; cin &gt;&gt; a &gt;&gt; b;
            long long ans = 0;
            for (int i = a; i+2*w.size()-1 &lt;= b; i++) {
                if (!m[i]) continue;
                for (int j = i+w.size(); j+w.size()-1 &lt;= b; j++) {
                    if (m[j]) ans++;
                }
    
            }
            cout &lt;&lt; ans &lt;&lt; endl;
        }
    
        return 0;
    }
    `}</pre>
  )
}

export default {SubmissionOverview, SubmissionDetails, SubmissionSource}
